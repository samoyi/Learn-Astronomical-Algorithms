;"use strict";



function Time(nTimezone=9){ // Default timezone is Japan's
    this.timezone = nTimezone;
}

let prototype = {};

Object.defineProperties(prototype, {
    'localTimezone': {
        get(){ return -((new Date()).getTimezoneOffset())/60; },
    },
    'createDateByTimezone': {
        value(){
            return new Date( Date.now()+(this.timezone-this.localTimezone)*3600000 );
        },
        enumerable: false,
    },
    'year': {
        get(){
            let date = this.createDateByTimezone();
            return date.getFullYear();
        },
    },
    'month': {
        get(){
            let date = this.createDateByTimezone();
            return date.getMonth()+1;
        },
    },
    'date': {
        get(){
            let date = this.createDateByTimezone();
            return date.getDate();
        },
    },
    'day': {
        get(){
            let date = this.createDateByTimezone();
            return date.getDay();
        },
    },
    'hour': {
        get(){
            let date = this.createDateByTimezone();
            return date.getHours();
        },
    },
    'minute': {
        get(){
            let date = this.createDateByTimezone();
            return date.getMinutes();
        },
    },
    'second': {
        get(){
            let date = this.createDateByTimezone();
            return date.getSeconds();
        },
    },
});

Time.prototype = prototype;

module.exports = Time;
