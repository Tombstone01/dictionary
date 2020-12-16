const chalk = require('chalk');

const getHelp = () => {
  console.log(chalk.red("Usage: dictionary [OPTION] [OPTION]\ndictionary -d word"));
  process.exit(0);
};

module.exports = {
  getHelp
};