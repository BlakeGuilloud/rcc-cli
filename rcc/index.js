const fs = require('fs');
const path = require('path');

function createFile(fileType, fileName, clientPath) {
  const filePath = getFilePath(fileType, fileName, clientPath);
  const fileTemplate = replace(getTemplate(fileType), '<#fileName>', fileName);

  return fs.writeFileSync(filePath, fileTemplate);
}

function getTemplate(fileType) {
  return fs.readFileSync(path.normalize([
    __dirname,
    `/templates/${fileType}.template`
  ].join('/'))).toString();
}

function getFilePath(fileType, fileName, clientPath) {
  return [
    getFileDest(clientPath), [
      fileName,
      getFileExtension(fileType)
    ].join('.')
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
  const filePath = [
    process.cwd(),
    clientPath
  ].join('/');

  return path.normalize(filePath);
}

function replace(string, find, fileName) {
  return string.split(find).join(fileName);
}

module.exports = {
  createFile,
  getFileExtension,
  getFileDest,
  getTemplate,
  getFilePath,
};
