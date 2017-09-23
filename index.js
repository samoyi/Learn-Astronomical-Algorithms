;"use strict";

const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.write('陰陽師');
    res.end();
}).listen(3000);
