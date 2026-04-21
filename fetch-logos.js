const fs = require('fs');
const path = require('path');
const https = require('https');

const companies = [
  "ONGC", "NTPC Limited", "Hindustan Petroleum", "Power Grid Corporation of India", "Container Corporation of India", "Hindustan Aeronautics Limited", "Mahanagar Telephone Nigam", "National Aluminium Company", "NBCC (India) Limited", "NLC India Limited", "NMDC Limited", "Rashtriya Ispat Nigam", "Shipping Corporation of India", "Rail Vikas Nigam", "ONGC Videsh", "Rashtriya Chemicals & Fertilizers", "RITES", "IRCON International", "National Fertilizers Limited", "Central Warehousing Corporation", "Indian Renewable Energy Development Agency", "Microsoft", "Google", "Amazon", "Apple Inc.", "IBM", "Intel", "Samsung", "Deloitte", "Accenture", "Oracle", "Volkswagen Group", "BMW", "Mercedes-Benz Group", "Siemens", "Bosch", "SAP", "Allianz", "Deutsche Telekom", "Bayer", "Adidas", "Reliance Industries", "Tata Consultancy Services", "Infosys", "HDFC Bank", "ICICI Bank", "Bharti Airtel", "State Bank of India", "Tata Motors", "Larsen & Toubro", "Alphabet Inc.", "Meta Platforms", "Tesla", "NVIDIA", "Berkshire Hathaway", "Johnson & Johnson", "JPMorgan Chase"
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Quillance/1.0' } }, (res) => {
      let data = '';
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location.startsWith('http') ? res.headers.location : 'https:' + res.headers.location).then(resolve).catch(reject);
      }
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Quillance/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location.startsWith('http') ? res.headers.location : 'https:' + res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(resolve); });
    }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
  });
}

async function fetchLogo(company) {
  try {
    const searchUrl = `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(company)}&language=en&format=json`;
    const searchRes = await get(searchUrl);
    const searchData = JSON.parse(searchRes);
    if (!searchData.search || searchData.search.length === 0) return null;
    
    const entityId = searchData.search[0].id;
    const claimsUrl = `https://www.wikidata.org/w/api.php?action=wbgetclaims&entity=${entityId}&property=P154&format=json`;
    const claimsRes = await get(claimsUrl);
    const claimsData = JSON.parse(claimsRes);
    
    if (!claimsData.claims || !claimsData.claims.P154) return null;
    const fileName = claimsData.claims.P154[0].mainsnak.datavalue.value;
    
    const imageInfoUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
    const imageInfoRes = await get(imageInfoUrl);
    const imageInfoData = JSON.parse(imageInfoRes);
    
    const pages = imageInfoData.query.pages;
    const page = Object.values(pages)[0];
    if (!page.imageinfo || page.imageinfo.length === 0) return null;
    
    const url = page.imageinfo[0].url;
    const ext = url.split('.').pop().toLowerCase();
    const dest = path.join(dir, `${company.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${ext}`);
    
    await download(url, dest);
    return `/logos/${company.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${ext}`;
  } catch (err) {
    console.error(`Error for ${company}:`, err.message);
    return null;
  }
}

async function run() {
  const map = {};
  for (const c of companies) {
    console.log(`Fetching ${c}...`);
    const path = await fetchLogo(c);
    if (path) {
      map[c] = path;
      console.log(`Success: ${c}`);
    } else {
      console.log(`Failed: ${c}`);
    }
    await new Promise(r => setTimeout(r, 500)); // Sleep to respect rate limits
  }
  fs.writeFileSync(path.join(__dirname, 'public', 'logos', 'map.json'), JSON.stringify(map, null, 2));
}

run();
