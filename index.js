"use strict";

/*
巫术
占卜
天文
历法
阴阳两界
*/




const http = require('http'),
      url = require('url'),
      util = require('util'),
      Pedia = require('./Basic/Wikipedia');

const server = new http.Server();
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    let oURL = url.parse(req.url, true),
    oQuery = oURL.query;

    if(oQuery.pedia && oQuery.lang){
        let getExtract = require('./Handlers/pedia');
        getExtract(oQuery.lang, oQuery.pedia, function(extract){
            res.write(extract);
            res.end();
        });
    }
    else{
        res.end();
    }

    if(oQuery.city){
        let getCoordinate = require('./Handlers/coordinate');
        getCoordinate(oQuery.city, function(sCoor){
            console.log(11111);
            res.write(sCoor);
            // res.end();
        });
    }
    else{
        console.log(222222);
        res.end();
    }

    // if(oQuery){
    //     res.write('Query is: ' + util.inspect(oQuery));
    // }
    // else{
    //     res.write('No query');
    // }
    // res.write('<br />');
    // res.end();
});
server.listen(8080);
