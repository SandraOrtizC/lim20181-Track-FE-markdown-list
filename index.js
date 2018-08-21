#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
const path = require('path');
const filemdvalidate = () => {
    if (path.extname(`${args}`) == '.md') {
        const mdfile = () => {
            // console.log(`${args}`);
            fs.readFile(args[0], 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data.toString());
                }
            });
        }
        mdfile();
// 
    }
    else {
        console.log('el archivo no es markdown');
    }

}
filemdvalidate()





