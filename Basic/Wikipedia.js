;"use strict";

// TODO
/*
* If queried word has disambiguation, an error will be thrown. Because on event
*   is triggered two or more times, data is seperated, so teperated data string is
*   not valid json string
* Defferent languages use different API, but now i can not detect the language
*   of a queried word.
*
* https://stackoverflow.com/questions/8555320/is-there-a-clean-wikipedia-api-just-for-retrieve-content-summary
* https://stackoverflow.com/questions/24806962/get-an-article-summary-from-the-mediawiki-api
* https://stackoverflow.com/questions/7185288/how-to-get-wikipedia-content-using-wikipedias-api
* https://stackoverflow.com/questions/627594/is-there-a-wikipedia-api
*/


const https = require('https');

const fs = require('fs');

function Wikipedia(){
}

let prototype = {};

Object.defineProperties(prototype, {
    'URL': {
        value: {
            'extract': 'https://ja.wikipedia.org/w/api.php?format=json&explaintext=true&action=query&prop=extracts&exintro=&explaintext=true&titles='
        },
        writable: false,
        configurable: false,
        enumerable: false,
    },
    'getExtract': {
        value(sTitle, callback){
            https.get(this.URL.extract + encodeURIComponent(sTitle), (res) => {
                res.setEncoding('utf8');
                let s = '',
                    index = 0;
                res.on('data', function (data) {
                    // fs.writeFile('output.txt', data);
                    // console.log( data );
                    s+=data;
                    index++;
                    // console.log( index+''+index+''+index+''+index+''+index + data );
                    if(index===2){
                        let oPages = JSON.parse(s).query.pages,
                            aExtract = [];
                        for(let pageID in oPages){
                            aExtract.push(oPages[pageID].extract);
                        }
                        callback(aExtract);
                    }
                    // let oPages = JSON.parse(data).query.pages,
                    //     aExtract = [];
                    // for(let pageID in oPages){
                    //     aExtract.push(oPages[pageID].extract);
                    // }
                    // callback(aExtract);
                });
            });
        },
    },
});

Wikipedia.prototype = prototype;

module.exports = Wikipedia;
