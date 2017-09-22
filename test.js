;"use strict";

// const Onmyouji = require('./Onmyouji.js');
//
// let astrology = Onmyouji.astrology();
//
// console.log( astrology.time.hour );


const Wikipedia = require('./Basic/Wikipedia.js');

let wikipedia = new Wikipedia();

wikipedia.getExtract('中国', function(res){
    console.log(res);
});
