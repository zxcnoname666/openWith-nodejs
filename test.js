const openWith = require('./index');


console.log(openWith.open(__dirname + '/index.js'));

/*
or:
const path = require('path');
console.log(openWith.open(path.join(__dirname, 'index.js')));
*/