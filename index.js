const dictionary = require('word-definition');
const { getHelp } = require("./helpers/help");
const { validateWord, getLocale, define } = require('./helpers/util');

const option = process.argv[2];
const word = process.argv[3];

if (option == '-h') getHelp();
if (option == '-d' && validateWord(word) < 0) process.exit(-1);

dictionary.getDef(word, getLocale(), { exact: false, hyperlinks: "none", formatted: false }, define);