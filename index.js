#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
const path = require('path');
// const options = {
// validate 
// stats
// // }

// mdlinks = (pathS ) => {
// fs.stat(pathS , (err, stat) => {
//  if (stat.isFile()  )
//   {
//     console.log(pathS)
//     console.log(path.resolve(pathS));
//   } 
// else if (stat.isDirectory()) {
// console.log(args[0] , "hola")   
// console.log(path.resolve(pathS));
//   fs.readdir(pathS, function(err, items) {
//     console.log(items);
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// })
// }
// })
//   }  

// module.exports = mdlinks;
if (path.extname(`${args}`) === '.md') 
{
   const mdfile = () => {
fs.readFile(args[0], 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  else {
    let result = data.match(/(?:__|[])|\[(.*?)\]\(.*?\)/gm);
    console.log(result);
  }
});
      } 
      mdfile(); 
    }
else {
       console.log('el archivo no es markdown');
    }




  








