#!/usr/bin/env node

const commander = require('commander');
const rcc = require('./rcc');

commander.version('0.1.5');
commander.command('[value] [value] [value]', { isDefault: true, })
  .description('creates a new Container, Component, or Pure function')
  .action((type, name, path) => {
    rcc.createFile(type, name, path);
  });

commander.parse(process.argv);
