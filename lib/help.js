const chalk = require('chalk');

const help = `  This app just defines words

  USAGE

  dictionary <option> <word> <locale>

  FLAGS
  -h Shows help menu
  -d defines a word`;

const getHelp = () => {
  console.log(chalk.blue.bold(help));
  process.exit(0);
};

module.exports = {
  getHelp
};