"use strict";

const Pedia = require('../Basic/Wikipedia');

function getExtract(sLang, sEntry, callback){
    let pedia = new Pedia(sLang);
    pedia.getExtract(sEntry, function(aExtract){
        // return aExtract.toString();
        callback(aExtract.toString());
    });
}

module.exports = getExtract;
