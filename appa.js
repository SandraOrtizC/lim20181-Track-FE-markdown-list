const math = require("./index.js");

mdlinks("./prueba/prueba.md")
// var showdown = require('showdown')
// const path = require('path');
  // console.log(html)
                    // console.log(typeof(html));
                    // var anchor = document.getElementById("guia");
                    // var hola  = document.getElementsByTagName("a")[0].getAttribute("href"); 
                    //  var href_val = html.split("href"); 
                    // console.log(href_val);
                    // var href_val =href_val.split// Si no funciona proba: var href_val =  href_val.split("\#");
// var ancla_actual = href_val[href_val.length-1];
// const filemdvalidate = () => {  
// }
// filemdvalidate()



// ruta absoluta F:\sandra\PROGRAMACION\Laboratoria\lim-2018-01-foodmap\README.md
// ruta relativa  .\lim-2018-01-foodmap\readme.md
//  mdlinks = (pathS ) => {
//  fs.stat(pathS , (err, stat) => {
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
//  }
//  })
//  }
//  })
//  }  

// module.exports = mdlinks;

// if (path.extname(`${args}`) === '.md') 
// {
//    const mdfile = () => {
// fs.readFile(args[0], 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     let result = data.match(/(?:__|[])|\[(.*?)\]\(.*?\)/gm);
//     console.log(result);
//   }
// });
//       } 
//       mdfile(); 
//     }
// else {
//        console.log('el archivo no es markdown');
//     }



#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
const path = require('path');
// const options = {
// validate 
// stats
// // }

if (path.isAbsolute(args[0]))
{
 // console.log(path.isAbsolute(args[0]));
// console.log(path.join(args[0]));
// console.log(path.parse(args[0]));

// path.parse(args[0])
 fs.stat(args[0] , (err, stat) => {
  if (stat.isFile())
   {
     // fs.readFile(args[0], 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }  
//   console.log(args[0])
    //  console.log(args[0].resolve(pathS));
   } 
 else  {
 console.log('es una carpeta')   
//  console.log(path.resolve(pathS));
//    fs.readdir(pathS, function(err, items) {
//      console.log(items);
//      for (var i=0; i<items.length; i++) {
//          console.log(items[i]);
  }

  })}

else{
  console.log('es relativa');
  
}


// ruta absoluta F:\sandra\PROGRAMACION\Laboratoria\lim-2018-01-foodmap\README.md
// ruta relativa  .\lim-2018-01-foodmap\readme.md
//  mdlinks = (pathS ) => {
//  fs.stat(pathS , (err, stat) => {
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
//  }
//  })
//  }
//  })
//  }  

// module.exports = mdlinks;

// if (path.extname(`${args}`) === '.md') 
// {
//    const mdfile = () => {
// fs.readFile(args[0], 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     let result = data.match(/(?:__|[])|\[(.*?)\]\(.*?\)/gm);
//     console.log(result);
//   }
// });
//       } 
//       mdfile(); 
//     }
// else {
//        console.log('el archivo no es markdown');
//     }



  


        // if ( path.extname() === '.md') {
        //   console.log('hola');
        // }
        // console.log('hola');
        //  fs.readFile(args[0], (err, data) => {
        //    if (err) {
        //     console.log(args[0]);
        //  }  
        //  else {
        //    readFile(data)
        // let result = data.match(/(?:__|[])|\[(.*?)\]\(.*?\)/gm);
        // console.log( path.extname(args[0]) === '.md' );
        // path.extname() === '.md' 

          // });

          // const directoryPath = path.join( paths);
//passsing directoryPath and callback function

// const readDirectory = () => {
//   // let filemd = []
  
//   fs.readdir(directoryPath , function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         file = path.resolve(directoryPath , file);
//         console.log(file); 

//         fs.stat(file, (err, stat) => {
//           if (stat.isFile()) {
//             readFile() 
//           }
//           else if (stat.isDirectory()) {
//             console.log('es una carpeta')
//             readDirectory()
//           }
//         })
// });


// //   fs.readdir(paths , (err ,files) => {
// //  if (err)
// //     throw err; 
// //    for (var index in files) {
// //     console.log(files[index]);
  
// //   // fileordirectory()
  

//  })
//  }