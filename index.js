const dictionary = require('word-definition');
const { getHelp } = require("./helpers/help");
const { validateWord, dict } = require('./helpers/util');

const option = process.argv[2];
const word = process.argv[3];

if (option == '-h') getHelp();
if (option == '-d' && validateWord(word) > 0) dict(word);
else console.log('Ooops, please check your flags or -h for help');
