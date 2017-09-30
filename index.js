;"use strict";

/*
 巫术
 占卜
 天文
 历法
 阴阳两界
*/


// const http = require('http');
//
// http.createServer((req, res)=>{
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf-8',
//     });
//     res.write('陰陽師');
//     res.end();
// }).listen(3000);


var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());
app.all('/', function(req, res) {
    res.send(req.body.title + req.body.text);
});

app.listen(3000);



// const http = require('http'),
//       url = require('url'),
//       util = require('util');
//
// const server = new http.Server();
// server.on('request', function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
//   res.write('<h1>陰陽師</h1>');
//   res.write( url.parse(req.url).query );
//   res.write('<br />');
//   res.write( util.inspect(url.parse(req.url)) );
//   res.write('<br />');
//   res.write( typeof url.parse(req.url, true).query );
//   res.write('<br />');
//   res.write( util.inspect(url.parse(req.url, true)) );
//   res.end();
// });
// server.listen(3000);
//
// console.log("HTTP server is listening at port 3000.");
