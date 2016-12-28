#!/usr/bin/env node

const commander = require('commander');
const rcc = require('./rcc');

commander.version('0.1.5');
commander.command('component [value] [value]')
  .description('creates a templated React Component')
  .action((name, path) => {
    rcc.createFile(name, 'components', path);
  });

commander.command('pure [value] [value]')
  .description('creates a templated React pure function')
  .action((name, path) => {
    rcc.createFile(name, 'pures', path);
  });

commander.command('container [value] [value]')
  .description('creates a React component with connect mapping')
  .action((name, path) => {
    rcc.createFile(name, 'containers', path);
  });

commander.parse(process.argv);
