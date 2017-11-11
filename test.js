"use strict";

const path = require('path');

console.log( path.basename('/foo/bar/baz///') );       // 'baz'
console.log( path.basename('/foo/bar/baz.html///') );  // 'baz.html'
