#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const [, , ...args] = process.argv
const route = args[0]

// Create reference instance
var marked= require('marked');


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
    readfilesmd(currentFile)
  }
}
const readfilesmd = (files) => {
  
  fs.readFile(files, 'utf8', (err, data) => {
  // const  array = []
    if (err) {
      console.log(err);
    }
    else {
  // console.log(data);
//      let result = data.match(/(?:__|[])|\[(.*?)\]\(.*?\)/g);
//  console.log(result);

     const tokens = marked.lexer(data);
console.log(tokens);

const html = marked.parser(tokens);
console.log(html);

// console.log(tokens);
    }
 });


 }




