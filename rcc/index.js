const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const {
  getFilePath,
  replace,
  getTemplate,
} = require('./utils');

// eslint-disable-next-line no-console
const log = console.log;

function createFile(fileType, fileName, clientPath, callback) {
  const filePath = getFilePath(fileType, fileName, clientPath);
  const fileTemplate = replace(getTemplate(fileType), '<#fileName>', fileName);

  fs.writeFile(filePath, fileTemplate, (err) => {
    if (err) {
      log(chalk.red(`Something went wrong when writing to ${filePath}`));
    } else {
      log(chalk.green(`New component written to ${filePath}`));
    }

    if (typeof callback === 'function') {
      callback(filePath);
    }
  });
}

module.exports = {
  createFile,
};
