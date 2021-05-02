const { getHelp } = require("./lib/help");
const { urban } = require('./lib/urban');
const { query } = require('./lib/wiki')

const boring = require('boring')({ end: true });

const { _, help, wiki, school, define } = boring

if (!_) process.exit(-2);
if (!help && !wiki && !school && !define) process.exit(-1);
if (wiki) query(_);
if (school) urban(_);
if (define) console.log('fill yours here');
