#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
// var showdown = require('showdown')
// const path = require('path');
// const options = {
  // validate 
  // stats
// // }
// mdlinks = (pathS ) => {
// fs.stat(pathS , (err, stat) => {
//  if (stat.isFile())
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
   
  var markdown = require( "markdown" ).markdown;
// console.log( markdown.toHTML( "Hello *World*!" ) );

    // if (path.extname(`${args}`) === '.md') {
    //     const mdfile = () => {
            fs.readFile(args[0], 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                //  console.log( markdown.toHTML( data ) );
                 console.log(typeof( markdown.toHTML( data )));
                 
                }
           });
    //     }
    //     mdfile();
    // }
    // else {
    //     console.log('el archivo no es markdown');
    // }








    
  // const filemdvalidate = () => {  
// }
// filemdvalidate()








                    // console.log(html)
                    // console.log(typeof(html));
                    // var anchor = document.getElementById("guia");
                    // var hola  = document.getElementsByTagName("a")[0].getAttribute("href"); 
                    //  var href_val = html.split("href"); 
                    // console.log(href_val);

                    // var href_val =href_val.split// Si no funciona proba: var href_val =  href_val.split("\#");

                    // var ancla_actual = href_val[href_val.length-1];
                  