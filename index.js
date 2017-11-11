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
    fs = require('fs'),
    Pedia = require('./Basic/Wikipedia');

const server = new http.Server();
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    let oURL = url.parse(req.url, true),
        oQuery = oURL.query,
        sPathname = removeTailSlashes(oURL.pathname);

    if(sPathname==='/api'){
        if(oQuery.pedia && oQuery.lang){
            let getExtract = require('./Handlers/pedia');
            getExtract(oQuery.lang, oQuery.pedia, function(extract){
                res.write(extract);
                res.end();
            });
        }
        else if(oQuery.city){
            let getCoordinate = require('./Handlers/coordinate');
            getCoordinate(oQuery.city, function(sCoor){
                res.write(sCoor.toString());
                res.end();
            });
        }
        else{
            res.end();
        }
    }
    else{
        let sFilePath = './Public/'+sPathname+'.html';
        if(fs.existsSync(sFilePath)){
            fs.readFile(sFilePath, function(err, data) {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 Not Found");
                }
                res.write(data);
                return res.end();
            });
        }
        else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("404 Not Found");
        }
    }
});

function removeTailSlashes(sURL){
    return sURL.replace(/\/+$/, '');
}
server.listen(8080);
