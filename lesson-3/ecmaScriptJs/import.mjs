const  exportedFile = require('./export.mjs');
const chalk = require('chalk');


console.log(exportedFile.str, exportedFile.sum);

console.log(chalk.bgBlueBright(exportedFile.str), chalk.redBright(exportedFile.sum));