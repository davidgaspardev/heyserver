var http = require('http');

http.createServer((request, response) => {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('Hello World!');
  response.end();

}).listen(80, '0.0.0.0');//IPv4
