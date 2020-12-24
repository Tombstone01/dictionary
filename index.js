const dictionary = require('word-definition');
const { getHelp } = require("./helpers/help");
const { validateWord, dict, urban } = require('./helpers/util');

const option = process.argv[2];
const word = process.argv[3];
// const word = process.argv.splice(3).toString().replace(",", " ")

if (option == '-h') getHelp();
if (option == '-d' && validateWord(word) > 0) dict(word);
if (option == '-u') urban(word);
