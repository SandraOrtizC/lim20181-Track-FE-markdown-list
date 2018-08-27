#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
const path = require('path');
const route = args[0]
const filemd = [];
// const fileordirectory = () => {
//   fs.stat(paths, (err, stat) => {
//     if (stat.isFile()) {
//       readFile(paths)
//     }
//     else if (stat.isDirectory()) {
//       console.log('es una carpeta')
//       readFolder(paths);
//     }
//   })
// }
const mdlinks = () => {
  return new Promise((resolve, reject) => {
    fs.stat(route, (err, stat) => {
      if (stat.isFile()) {
        readFile(route)
      }
      else {
        readFolder(route)
      }
    })
  })
 }
mdlinks()
module.exports = mdlinks
const readFolder = (currentPath) => {
  const files = fs.readdirSync(currentPath);
  for (let i in files) {
    let currentFile = currentPath + '/' + files[i];
    let stats = fs.statSync(currentFile);
    if (stats.isFile()) {
      readFile(currentFile)
    }
    else if (stats.isDirectory()) {
      readFolder(currentFile);
    }
  }
};
const readFile = (currentFile) => {
  if (path.extname(currentFile) === '.md') {
    const fileMd = path.basename(currentFile)
    filemd.push(fileMd)
    filemd.map(file => readfiles(file))
  }
}
const readfiles = (files) => {
  fs.readFile(files, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      let result = data.match(/(?:__|[])|\[(.*?)\]\(.*?\)/gm);
      console.log(result);
    }
  });
}







