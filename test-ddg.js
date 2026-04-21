const https = require('https');

function searchDDG(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&t=h_&iax=images&ia=images`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const vqdMatch = data.match(/vqd=([a-zA-Z0-9_\-]+)/);
        if (!vqdMatch) {
            console.log("Response:", data.substring(0, 500));
            return reject('No vqd');
        }
        
        https.get(`https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqdMatch[1]}&f=,,,&p=1`, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        }, (res2) => {
          let data2 = '';
          res2.on('data', c => data2 += c);
          res2.on('end', () => {
              try {
                  resolve(JSON.parse(data2));
              } catch(e) { reject(e); }
          });
        }).on('error', reject);
      });
    }).on('error', reject);
  });
}

searchDDG('ONGC logo png transparent').then(d => console.log(d.results[0].image)).catch(console.error);
