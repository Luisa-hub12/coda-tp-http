const http = require('http');
const https = require('https');
const fs = require('fs');

const html = fs.readFileSync('index.html');

const handleRequest = (req, res) => {
   if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
         console.log(`[DONNÉES REÇUES EN CLAIR SUR LE SERVEUR] : ${body}`);
         res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
         res.end(`<h3>Données reçues sur le serveur : ${body}</h3><a href="/">Retour</a>`);
      });
   } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
   }
};

http.createServer(handleRequest).listen(8080, () => {
   console.log(' HTTP  actif sur : http://localhost:8080');
});

https.createServer({
   key: fs.readFileSync('key.pem'),
   cert: fs.readFileSync('cert.pem')
}, handleRequest).listen(8443, () => {
   console.log(' HTTPS actif sur : https://localhost:8443');
});