const fs = require('fs');
const path = require('path');

function getTemplate(fileType) {
  return fs.readFileSync(path.normalize([
    __dirname,
    `/templates/${fileType}.template`,
  ].join('/'))).toString();
}

function getFilePath(fileType, fileName, cp) {
  let clientPath = cp;

  if (typeof clientPath !== 'string') {
    clientPath = '';
  }

  return [
    getFileDest(clientPath), [
      fileName,
      getFileExtension(fileType),
    ].join('.'),
  ].join('/');
}

function getFileExtension(fileType) {
  switch (fileType) {
    case 'component':
    case 'container':
    case 'pure':
      return 'jsx';
    default:
      return 'js';
  }
}

function getFileDest(clientPath) {
  if (!clientPath) {
    return path.normalize(process.cwd());
  }

  const filePath = [
    process.cwd(),
    clientPath,
  ].join('/');

  return path.normalize(filePath);
}

function replace(string, find, fileName) {
  return string.split(find).join(fileName);
}

module.exports = {
  replace,
  getFileExtension,
  getFileDest,
  getTemplate,
  getFilePath,
};
