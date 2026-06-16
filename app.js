const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from CI/CD Pipeline!\n');
}).listen(3000);

console.log('App running on port 3000');