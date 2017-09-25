;"use strict";

// const http = require('http');
//
// http.createServer((req, res)=>{
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf-8',
//     });
//     res.write('陰陽師');
//     res.end();
// }).listen(3000);

const http = require('http'),
      url = require('url'),
      util = require('util');

const server = new http.Server();
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  res.write('<h1>陰陽師</h1>');
  res.end(util.inspect(url.parse(req.url, true)));
});
server.listen(3000);

console.log("HTTP server is listening at port 3000.");
