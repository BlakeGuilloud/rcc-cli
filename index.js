#!/usr/bin/env node

const commander = require('commander');
const rcc       = require('./rcc');

commander.version('0.1.5');
commander.command('component [value] [value]')
  .description('creates a templated pure function react component')
  .action((name, path) => {
    rcc(name, 'components', path);
  });

commander.command('container [value] [value]')
  .description('creates a react component with connect and dispatch mapping')
  .action((name, path) => {
    rcc(name, 'containers', path);
  });

commander.parse(process.argv);
