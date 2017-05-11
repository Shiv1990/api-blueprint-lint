#!/usr/bin/env node

var program = require('commander');

var parse = require('./parse');

program
  .arguments('<file>')
  .action((file) => {
    console.log("Validate " + file);
    parse(file)
      .then((annotations) => {
        if (annotations.length) {
          annotations.forEach((item) => {
            console.log(item.content);
          })
          process.exit(1);
        } else {
          console.log("No annotations found");
          process.exit(0);
        }
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      })
  })
  .parse(process.argv);
