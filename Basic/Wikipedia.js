;"use strict";

const https = require('https');

const fs = require('fs');

function Wikipedia(){
}

let prototype = {};

Object.defineProperties(prototype, {
    'URL': {
        value: {
            'extract': 'https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=true&explaintext=true&titles='
        },
        writable: false,
        configurable: false,
        enumerable: false,
    },
    'getExtract': {
        value(sTitle, callback){
            https.get(this.URL.extract + encodeURIComponent(sTitle), (res) => {
                res.setEncoding('utf8');
                res.on('data', function (data) {
                    let oPages = JSON.parse(data).query.pages,
                        aExtract = [];
                    for(let pageID in oPages){
                        aExtract.push(oPages[pageID].extract);
                    }
                    fs.writeFile('output.txt',aExtract[0]);
                    callback(aExtract);
                });
            });
        },
    },
});

Wikipedia.prototype = prototype;

module.exports = Wikipedia;
