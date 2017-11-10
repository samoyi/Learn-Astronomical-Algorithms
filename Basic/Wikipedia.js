"use strict";

// TODO
/*
* 如果搜索的条目会被重定向，这会会从重定向也获取信息，也就是获取不到。例如使用zh语言搜索
*   “中国”
*   of a queried word.
*
* https://stackoverflow.com/questions/8555320/is-there-a-clean-wikipedia-api-just-for-retrieve-content-summary
* https://stackoverflow.com/questions/24806962/get-an-article-summary-from-the-mediawiki-api
* https://stackoverflow.com/questions/7185288/how-to-get-wikipedia-content-using-wikipedias-api
* https://stackoverflow.com/questions/627594/is-there-a-wikipedia-api
*/


const https = require('https');


/*
 * @para  sLanguage: language type in Wikipedia URL host
 *
 */
function Wikipedia(sLanguage){
    this.language = sLanguage;
}

let prototype = {};

Object.defineProperties(prototype, {
    'URL': {
        get(){
            return {
                'extract': 'https://' +this.language+ '.wikipedia.org/w/api.php?format=json&explaintext=true&action=query&prop=extracts&exintro=&explaintext=true&titles='
            };
        },
    },
    'getExtract': {
        value(sTitle, callback){
            https.get(this.URL.extract + encodeURIComponent(sTitle), (res) => {
                res.setEncoding('utf8');
                let data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function(){
                    let oPages = JSON.parse(data).query.pages,
                        aExtract = [];
                    for(let pageID in oPages){
                        aExtract.push(oPages[pageID].extract);
                    }
                    callback(aExtract);
                })
            });
        },
    },
});


Wikipedia.prototype = prototype;

module.exports = Wikipedia;
