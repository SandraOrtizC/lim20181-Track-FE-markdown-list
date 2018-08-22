#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
// var showdown = require('showdown')
const path = require('path');
// const options = {
  // validate 
  // stats
// // }
// const mdlinks = (args , options) => {}
fs.stat(args[0] , (err, stat) => {
 if (stat.isFile())
  {
    console.log(args[0])
    console.log(path.resolve(args[0]));
    
  } 
else if (stat.isDirectory()) {
  // console.log(args[0] , "hola")   
  // console.log(path.resolve(args[0]));
  fs.readdir(args[0], function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
})

}
})
    
   
  
    // if (path.extname(`${args}`) === '.md') {
    //     const mdfile = () => {
    //         fs.readFile(args[0], 'utf8', (err, data) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //             else {
    //                 converter = new showdown.Converter()
    //                 html = converter.makeHtml(data);
    //                 console.log(html);
    //             }
    //         });
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
                  