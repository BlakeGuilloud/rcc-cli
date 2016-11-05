#!/usr/bin/env node

const commander = require('commander');
const rcc       = require('./rcc');

commander.version('0.1.5');
commander.command('create:component [value] [value]')
  .description('creates a templated pure function react component')
  .action((path, name) => {
    console.log('path', path);
    console.log('name', name);
    rcc(path, 'component', name);
  });

commander.command('create:container [value] [value]')
  .description('creates a react component with connect and dispatch mapping')
  .action((path, name) => {
    rcc(path, 'container', name);
  });

commander.parse(process.argv);
