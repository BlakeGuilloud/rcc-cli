const fs = require('fs');
const rimraf = require('rimraf');

const { createFile } = require('../rcc');

beforeEach(done =>
  fs.mkdir(`${process.cwd()}/test/files`, done));

afterEach(done =>
  rimraf(`${process.cwd()}/test/files`, done));

describe('creating a new component', () => {
  it('should still create a component if no callback argument was provided', () => {
    createFile('component', 'Blue', 'test/files');
  });

  it('should create a new component', (done) => {
    createFile('component', 'Header', 'test/files', (file) => {
      expect(file).toBe(`${process.cwd()}/test/files/Header.jsx`);
      done();
    });
  });
});

describe('create a new container', () => {
  it('should still create a container if no callback argument was provided', () => {
    createFile('container', 'BlueContainer', 'test/files');
  });

  it('should create a new container', (done) => {
    createFile('container', 'HeaderContainer', 'test/files', (file) => {
      expect(file).toBe(`${process.cwd()}/test/files/HeaderContainer.jsx`);
      done();
    });
  });
});

describe('create a new pure function', () => {
  it('should still create a pure function if no callback argument was provided', () => {
    createFile('container', 'BluePure', 'test/files');
  });

  it('should create a new pure function', (done) => {
    createFile('container', 'Header', 'test/files', (file) => {
      expect(file).toBe(`${process.cwd()}/test/files/Header.jsx`);
      done();
    });
  });
});
