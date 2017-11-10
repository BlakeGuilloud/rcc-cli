const rcc = require('../rcc');

describe('getFileExtension', () => {
  const getFileExtension = rcc.getFileExtension;

  it('should map file extension', () => {
    expect(getFileExtension('components')).toBe('jsx');
    expect(getFileExtension('containers')).toBe('jsx');
    expect(getFileExtension('pures')).toBe('jsx');

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
    expect(getTemplate('components')).toContain('state');
    expect(getTemplate('containers')).toContain('actions');
    expect(getTemplate('pures')).toContain('.propTypes');
  });
});

describe('getFilePath', () => {
  const getFilePath = rcc.getFilePath;

  it('should create a file path', () => {
    expect(getFilePath('foo', 'components', 'bar')).toBe(`${process.cwd()}/bar/foo.jsx`)
    expect(getFilePath('foo', 'containers', 'bar')).toBe(`${process.cwd()}/bar/foo.jsx`)
    expect(getFilePath('foo', 'pures', 'bar')).toBe(`${process.cwd()}/bar/foo.jsx`)
  });
});
