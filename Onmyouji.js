"use strict";


const Astrology = require('./Skill/Astrology.js');


function Onmyouji(){};

let prototype = {};
Object.defineProperties(prototype, {
    'astrology': {
        value(nTimezone=9){
            return new Astrology(nTimezone);
        }
    },
});


Onmyouji.prototype = prototype;

module.exports = Object.freeze(new Onmyouji());
