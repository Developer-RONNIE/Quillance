const https = require('https');
const fs = require('fs');
const path = require('path');

const companies = [
  "ONGC", "NTPC Limited", "Hindustan Petroleum", "Power Grid Corporation of India", "Container Corporation of India", "Hindustan Aeronautics Limited", "Mahanagar Telephone Nigam", "National Aluminium Company", "NBCC (India) Limited", "NLC India Limited", "NMDC Limited", "Rashtriya Ispat Nigam", "Shipping Corporation of India", "Rail Vikas Nigam", "ONGC Videsh", "Rashtriya Chemicals & Fertilizers", "RITES", "IRCON International", "National Fertilizers Limited", "Central Warehousing Corporation", "Indian Renewable Energy Development Agency", "Microsoft", "Google", "Amazon", "Apple Inc.", "IBM", "Intel", "Samsung", "Deloitte", "Accenture", "Oracle", "Volkswagen Group", "BMW", "Mercedes-Benz Group", "Siemens", "Bosch", "SAP", "Allianz", "Deutsche Telekom", "Bayer", "Adidas", "Reliance Industries", "Tata Consultancy Services", "Infosys", "HDFC Bank", "ICICI Bank", "Bharti Airtel", "State Bank of India", "Tata Motors", "Larsen & Toubro", "Alphabet Inc.", "Meta Platforms", "Tesla", "NVIDIA", "Berkshire Hathaway", "Johnson & Johnson", "JPMorgan Chase"
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function getGoogleImage(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        // Find the first external image link that isn't a tracking pixel or icon
        const match = data.match(/<img[^>]+src="([^"]+)"[^>]*>/g);
        if (match) {
            for (let tag of match) {
                const srcMatch = tag.match(/src="([^"]+)"/);
                if (srcMatch && srcMatch[1].startsWith('https://encrypted-tbn0.gstatic.com/images')) {
                    return resolve(srcMatch[1]);
                }
            }
        }
        resolve(null);
      });
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
  });
}

async function run() {
  const map = {};
  for (const c of companies) {
    console.log(`Searching ${c}...`);
    try {
        const url = await getGoogleImage(`${c} company logo png transparent`);
        if (url) {
            const filename = `${c.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
            const dest = path.join(dir, filename);
            await download(url, dest);
            map[c] = `/logos/${filename}`;
            console.log(`Success: ${c}`);
        } else {
            console.log(`No image found for: ${c}`);
        }
    } catch (e) {
        console.log(`Error for ${c}:`, e.message);
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  fs.writeFileSync(path.join(dir, 'map.json'), JSON.stringify(map, null, 2));
}

run();
