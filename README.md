[![Build Status](https://travis-ci.org/BlakeGuilloud/rcc-cli.svg?branch=master)](https://travis-ci.org/BlakeGuilloud/rcc-cli)
[![NPM version](https://img.shields.io/npm/v/rcc-cli.svg)](https://www.npmjs.com/package/rcc-cli)

<h1> rcc-cli </h1>

<h3> React Create Component</h3>

Install with [npm](https://www.npmjs.com/package/rcc-cli)

```bash
$ npm install rcc-cli -g
```
```bash
$ yarn global add rcc-cli
```

<h3> Usage: </h3>
rcc accepts three arguments:

- type : the type of component to be created. [pure, component, container]
- name : the name of the component you wish to create.
- path : the path from your cwd() to inject the file.

<h3> Examples: </h3>

```bash
$ rcc pure Header src/components
```

```bash
$ rcc container HeaderContainer src/containers
```

<h3> A very simple tool for building React applications quickly. </h3>
<p> RCC provides templated ES6 React Components </p>
<p> Built with FS and CommanderJs </p>
