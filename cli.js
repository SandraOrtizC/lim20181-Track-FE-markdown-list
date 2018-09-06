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
                    array.forEach(linksData => {
                        console.log(`${linksData.file}\t ${linksData.href}\t ${linksData.text}`);
                    });
                }

                else if (options.stats && options.validate){
                    array.forEach(linksData => {
                        console.log(`total:${linksData.total}\nunique:${linksData.unique}\nbroken:${linksData.broken}`)
                   });
                }
               else if(options.validate == true) {
                    array.forEach(linksData => {
                        console.log(`${linksData.file}\t ${linksData.href}\t ${linksData.status}\t${linksData.statusText}`);
                    });
                }
               else if(options.stats == true ) {
                    array.forEach(linksData => {
                         console.log(`total:${linksData.total}\nunique:${linksData.unique}`)
                    });
                }
                
            
            })
    })
    .parse(process.argv);




