"use strict";

const Time = require('../Basic/Time.js');

function Astrology(nTimezone=9){
    this.time = new Time(nTimezone);
}

Astrology.prototype = {

};

module.exports = Astrology;
