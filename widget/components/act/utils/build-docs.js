const fs = require('fs');

const components = fs.readdirSync('../').filter(item => item.startsWith('a-'));

var md2json = require('md-2-json');

const json = md2json.parse(fs.readFileSync('../a-icon/readme.md').toString());

console.log(json)