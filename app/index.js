const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/api/hello') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({msg:'Hello from App tier', time: new Date().toISOString()}));
    return;
  }
  res.writeHead(404, {'Content-Type':'text/plain'});
  res.end('not found');
});
server.listen(port, ()=>console.log('App listening on', port));
