;"use strict";

// const Onmyouji = require('./Onmyouji.js');
//
// let astrology = Onmyouji.astrology();
//
// console.log( astrology.time.hour );


const Wikipedia = require('./Basic/Wikipedia.js');

let wikipedia = new Wikipedia('ja');

wikipedia.getExtract('陰陽師', function(aExtract){
    console.log(aExtract);
});




// var contents = querystring.stringify({
//     name: 'byvoid',
//     email: 'byvoid@byvoid.com',
//     address: 'Zijing 2#, Tsinghua University',
// });
//
//
// var options = {
//     host: 'www.byvoid.com',
//     path: '/application/node/post.php',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Length' : contents.length
//     }
// };
//
// var req = http.request(options, function(res) {
//     res.setEncoding('utf8'); // Covert buffer to string
//     res.on('data', function (data) {
//         console.log(data);
//     });
// });
//
// req.write(contents);
// req.end();
