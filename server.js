const server = require('http');

server
.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!'
    })
  );
})
.listen(4001, () => {
    console.log('Server is running on port 8000')
});