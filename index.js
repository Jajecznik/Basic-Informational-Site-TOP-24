const http = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/index.html' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/src/index.html').pipe(res)
  } else if (req.url === '/about.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/src/about.html').pipe(res)
  } else if (req.url === '/contact-me.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/src/contact-me.html').pipe(res)
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/src/404.html').pipe(res)
  }
});

server.listen(port, hostname, (error) => {
  if (error) {
    console.log('Something went wrong: ', error);
  } else {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
});
