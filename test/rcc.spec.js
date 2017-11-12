const rcc = require('../rcc');

describe('getFileExtension', () => {
  const getFileExtension = rcc.getFileExtension;

  it('should map file extension', () => {
    expect(getFileExtension('component')).toBe('jsx');
    expect(getFileExtension('container')).toBe('jsx');
    expect(getFileExtension('pure')).toBe('jsx');

    expect(getFileExtension('foo')).toBe('js');
  });
});

describe('getFileDest', () => {
  const getFileDest = rcc.getFileDest;

  it('should map file destination', () => {
    expect(getFileDest('foo')).toBe(`${process.cwd()}/foo`);
    expect(getFileDest('bar')).toBe(`${process.cwd()}/bar`);
  });
});

describe('getTemplate', () => {
  const getTemplate = rcc.getTemplate;

  it('should retrieve the proper template', () => {
    expect(getTemplate('component')).toContain('state');
    expect(getTemplate('container')).toContain('actions');
    expect(getTemplate('pure')).toContain('.propTypes');
  });
});

describe('getFilePath', () => {
  const getFilePath = rcc.getFilePath;

  it('should create a file path', () => {
    expect(getFilePath('component', 'foo', 'bar')).toBe(`${process.cwd()}/bar/foo.jsx`);
    expect(getFilePath('container', 'foo', 'bar')).toBe(`${process.cwd()}/bar/foo.jsx`);
    expect(getFilePath('pure', 'foo', 'bar')).toBe(`${process.cwd()}/bar/foo.jsx`);
  });
});
