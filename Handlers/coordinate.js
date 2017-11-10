"use strict";

const fs = require('fs');


function getCoordinate(sCity, callback){
    fs.readFile('./Data/coordinates.json', 'utf8', function(err, data){ // 为什么这里是同级目录
        if (err) throw err;
        let oCity = JSON.parse(data);
        if(sCity in oCity){
            callback(oCity[sCity]);
        }
        else{
            callback('No this city');
        }
    });
}

module.exports = getCoordinate;
