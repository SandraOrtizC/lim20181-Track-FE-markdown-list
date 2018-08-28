#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const marked = require('marked');

const [, , ...args] = process.argv
const route = args[0]

const mdlinks = () => {
  // return new Promise((resolve, reject) => {
    fs.stat(route, (err, stat) => {

      if (stat.isFile()) {

        readFile(route)
      }
      else {
        readFolder(route)
      }
    })
  // })
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
    const result = data.match(/(https?:\/\/).([a-z\.]{2,6})([\/\w \.-]*)[^images\.]/g)
    console.log(result);
   // if(result !=null) {
    //   for (let i = 0; i <result.length; i++) {
    //   const element = result[i];
    //   // console.log(element);
    //   const arrLinks = [];
    //   const render = new marked.Renderer()
    // render.element = (href, title, text) => {
    //    if (href != text) {
    //       arrLinks.push({
    //         href: href,
    //         text: text,
    //         file: files,
    //       })
          
    //       // console.log(arrLinks);
    //     }
    //     else{
    //       console.log('hola');
          
    //     }
    //       console.log(arrLinks);
    //   }
      
    // }}
    
  });

}



