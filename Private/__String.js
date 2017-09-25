;"use strict";


function __String(){

}

let proto = {};

Object.defineProperties(proto, {
    'strLen': {
        value(str){
            return [...str].length;
        }
    }
});

__String.prototype = proto;

module.exports = __String;
