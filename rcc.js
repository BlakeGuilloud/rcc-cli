const fs   = require('fs');
const path = require('path');

function createFile(fileName, fileType, clientPath) {
  const filePath    = getFilePath(fileName, fileType, clientPath);
  var fileTemplate  = getTemplate(fileType);

  fileTemplate = replace(fileTemplate, '<#fileName>', fileName);

  fs.writeFileSync(filePath, fileTemplate);
}

function getTemplate(fileType) {
  return fs.readFileSync(path.normalize([
    __dirname,
    `/templates/${fileType}.template`,
  ].join('/'))).toString();
}

function getFilePath(fileName, fileType, clientPath) {
  return [
    getFileDest(clientPath), [
      fileName,
      getFileExtension(fileType),
    ].join('.'),
  ].join('/');
}

function getFileExtension(fileType) {
  switch (fileType) {
    case 'components':
    case 'containers':
      return 'jsx';
      break;
    default:
      return 'js';
  }
}

function getFileDest(clientPath) {
  const filePath = [
    process.cwd(),
    clientPath,
  ].join('/');

  return path.normalize(filePath);
}

function replace(string, find, fileName) {
  return string.split(find).join(fileName);
}

module.exports = createFile;
