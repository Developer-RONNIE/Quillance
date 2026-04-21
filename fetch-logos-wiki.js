const https = require('https');
const fs = require('fs');
const path = require('path');

const companies = [
  { name: "ONGC", q: "ONGC logo png transparent" },
  { name: "NTPC Limited", q: "NTPC logo png" },
  { name: "Hindustan Petroleum Corporation Limited", q: "HPCL logo png" },
  { name: "Power Grid Corporation of India", q: "Power Grid Corporation of India logo png" },
  { name: "CONCOR", q: "CONCOR logo png" },
  { name: "HAL", q: "Hindustan Aeronautics Limited logo png" },
  { name: "MTNL", q: "MTNL logo png" },
  { name: "NALCO", q: "NALCO logo png" },
  { name: "NBCC", q: "NBCC logo png" },
  { name: "NLC India Limited", q: "NLC India logo png" },
  { name: "NMDC Limited", q: "NMDC logo png" },
  { name: "RINL", q: "Rashtriya Ispat Nigam logo png" },
  { name: "Shipping Corporation of India", q: "Shipping Corporation of India logo png" },
  { name: "RVNL", q: "Rail Vikas Nigam logo png" },
  { name: "ONGC Videsh Limited", q: "ONGC Videsh logo png" },
  { name: "Rashtriya Chemicals & Fertilisers", q: "Rashtriya Chemicals Fertilizers logo png" },
  { name: "RITES Limited", q: "RITES logo png" },
  { name: "IRCON International", q: "IRCON logo png" },
  { name: "National Fertilizers Limited", q: "National Fertilizers logo png" },
  { name: "Central Warehousing Corporation", q: "Central Warehousing Corporation logo png" },
  { name: "IREDA", q: "IREDA logo png" },
  { name: "Microsoft", q: "Microsoft logo png transparent" },
  { name: "Google", q: "Google logo png transparent" },
  { name: "Amazon", q: "Amazon logo png transparent" },
  { name: "Apple", q: "Apple logo png transparent" },
  { name: "IBM", q: "IBM logo png transparent" },
  { name: "Intel", q: "Intel logo png transparent" },
  { name: "Samsung", q: "Samsung logo png transparent" },
  { name: "Deloitte", q: "Deloitte logo png transparent" },
  { name: "Accenture", q: "Accenture logo png transparent" },
  { name: "Oracle", q: "Oracle logo png transparent" },
  { name: "Volkswagen Group", q: "Volkswagen logo png transparent" },
  { name: "BMW", q: "BMW logo png transparent" },
  { name: "Mercedes-Benz Group", q: "Mercedes Benz logo png transparent" },
  { name: "Siemens", q: "Siemens logo png transparent" },
  { name: "Bosch", q: "Bosch logo png transparent" },
  { name: "SAP", q: "SAP logo png transparent" },
  { name: "Allianz", q: "Allianz logo png transparent" },
  { name: "Deutsche Telekom", q: "Deutsche Telekom logo png transparent" },
  { name: "Bayer", q: "Bayer logo png transparent" },
  { name: "Adidas", q: "Adidas logo png transparent" },
  { name: "Reliance Industries", q: "Reliance Industries logo png" },
  { name: "Tata Consultancy Services", q: "TCS logo png" },
  { name: "Infosys", q: "Infosys logo png" },
  { name: "HDFC Bank", q: "HDFC Bank logo png" },
  { name: "ICICI Bank", q: "ICICI Bank logo png" },
  { name: "Bharti Airtel", q: "Airtel logo png" },
  { name: "State Bank of India", q: "SBI logo png" },
  { name: "Tata Motors", q: "Tata Motors logo png" },
  { name: "Larsen & Toubro", q: "Larsen and Toubro logo png" },
  { name: "Apple Inc.", q: "Apple logo png transparent" },
  { name: "Microsoft Corporation", q: "Microsoft logo png transparent" },
  { name: "Alphabet Inc. (Google)", q: "Google logo png transparent" },
  { name: "Meta Platforms", q: "Meta logo png transparent" },
  { name: "Tesla", q: "Tesla logo png transparent" },
  { name: "NVIDIA", q: "Nvidia logo png transparent" },
  { name: "Berkshire Hathaway", q: "Berkshire Hathaway logo png transparent" },
  { name: "Johnson & Johnson", q: "Johnson and Johnson logo png" },
  { name: "JPMorgan Chase", q: "JPMorgan Chase logo png transparent" }
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function searchDDGHtml(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        // Find external images
        // For DuckDuckGo HTML, image links are sometimes in <img src="..."/>
        // Actually, DDG HTML doesn't inline images well. 
        // Let's use Wikipedia API directly, it's MUCH safer and reliable for these big companies.
        resolve(null);
      });
    }).on('error', reject);
  });
}

function fetchWikipediaLogo(companyName) {
    return new Promise((resolve, reject) => {
        const query = encodeURIComponent(companyName + " logo");
        https.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&utf8=&format=json`, {
            headers: { 'User-Agent': 'QuillanceApp/1.0' }
        }, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.query && parsed.query.search && parsed.query.search.length > 0) {
                        const title = parsed.query.search[0].title;
                        // Now fetch the page images for this title
                        https.get(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=400`, {
                            headers: { 'User-Agent': 'QuillanceApp/1.0' }
                        }, (res2) => {
                            let data2 = '';
                            res2.on('data', c => data2 += c);
                            res2.on('end', () => {
                                try {
                                    const parsed2 = JSON.parse(data2);
                                    const pages = parsed2.query.pages;
                                    const page = Object.values(pages)[0];
                                    if (page && page.thumbnail && page.thumbnail.source) {
                                        resolve(page.thumbnail.source);
                                    } else {
                                        resolve(null);
                                    }
                                } catch (e) { resolve(null); }
                            });
                        });
                    } else {
                        resolve(null);
                    }
                } catch (e) { resolve(null); }
            });
        }).on('error', reject);
    });
}

function fetchClearbitLogo(domain) {
    // We already know Clearbit fails due to ENOTFOUND on the user's machine! 
    // We must use a proxy or alternative like Brandfetch.
    return new Promise((resolve) => resolve(null));
}

// Another alternative is ui-avatars for fallback. We will generate that dynamically in the component.

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => { fs.unlink(dest, () => resolve(false)); });
  });
}

async function run() {
  const map = {};
  for (const c of companies) {
    console.log(`Fetching ${c.name}...`);
    try {
        let url = await fetchWikipediaLogo(c.name);
        
        if (url) {
            const filename = `${c.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
            const dest = path.join(dir, filename);
            await download(url, dest);
            map[c.name] = `/logos/${filename}`;
            console.log(`  -> Success! Saved to ${filename}`);
        } else {
            console.log(`  -> Failed to find logo.`);
        }
    } catch (e) {
        console.log(`  -> Error: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 200));
  }
  fs.writeFileSync(path.join(__dirname, 'public', 'logos', 'map.json'), JSON.stringify(map, null, 2));
}

run();
