#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
const path = require('path');
const paths = args[0]
const filemd = [];
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
    console.log(filemd);
  }

}
const fileordirectory = () => {
  fs.stat(paths, (err, stat) => {
    if (stat.isFile()) {
      readFile(paths)
    }
    else if (stat.isDirectory()) {
      console.log('es una carpeta')
      readFolder(paths);
    }
  })
}
const extraerlinks = () => { }
const mdlinks = () => {
  if (path.isAbsolute(paths)) {
    fileordirectory()
  }
  else {
  fileordirectory()
  }

}
mdlinks()




