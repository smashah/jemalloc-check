#!/usr/bin/env node

const { jemallocCheck } = require('../dist/index.js');

jemallocCheck().then((result) => {
  if (result) {
    console.log(`jemalloc is installed at ${result}`);
  } else {
    console.log('jemalloc is not installed');
  }
});
