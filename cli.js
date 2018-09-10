#!/usr/bin/env node

const program = require('commander');
const mdLinks = require('./index.js')

let options = {
  validate: false,
  stats: false
}

program
  .arguments('<path>')
  .option('-v, --validate', 'Validar links si estan rotos o no')
  .option('-s, --stats', 'Mostrar stats de los links')
  .action((route) => {
    options.validate = program.validate;
    options.stats = program.stats;
    mdLinks(route, options)
      .then(array => {
        if (!options.stats && !options.validate) {
          array.forEach(linksinfo => {
            console.log(`${linksinfo.file}\t ${linksinfo.href}\t ${linksinfo.text}`);
          });
        }
        else if (options.stats && options.validate) {
          array.forEach(linksinfo => {
            console.log(`total:${linksinfo.total}\nunique:${linksinfo.unique}\nbroken:${linksinfo.broken}`)
          });
        }
        else if (options.validate == true) {
          array.forEach(linksinfo => {
            console.log(`${linksinfo.file}\t ${linksinfo.href}\t ${linksinfo.status}\t${linksinfo.statusText}`);
          });
        }
        else if (options.stats == true) {
          array.forEach(linksinfo => {
            console.log(`total:${linksinfo.total}\nunique:${linksinfo.unique}`)
          });
        }
      })
  })
  .parse(process.argv);




