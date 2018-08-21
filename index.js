#!/usr/bin/env node
const fs = require('fs');
const [, , ...args] = process.argv
var showdown = require('showdown')
const path = require('path');


    if (path.extname(`${args}`) === '.md') {
        const mdfile = () => {
            fs.readFile(args[0], 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    converter = new showdown.Converter()
                    html = converter.makeHtml(data);
                    console.log(html);
                }
            });
        }
        mdfile();
    }
    else {
        console.log('el archivo no es markdown');
    }








    
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
                    //  console.log(href_val)



