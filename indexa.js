
let klaw = require('klaw'),
    path = require('path'),
    through2 = require('through2')
const fs = require('fs');
dir_walk = process.argv[2] || process.cwd();
fs.stat(dir_walk , (err, stat) => {
    if (stat.isFile()) {
         console.log(path.resolve(dir_walk) , 'HOL');
 }
    // else if (stat.isDirectory()) {
        // console.log(dir_walk , "hola")
  else { 
        klaw(dir_walk)
            .pipe(through2.obj(function (item, enc, next) {
                let ext = path.extname(item.path);
                if (ext.toLowerCase() === '.md' || ext.toLowerCase() === '.md') {
                    this.push(item);
                }
                next();
            }))
            .on('data', function (item) {
                console.log(item.path);
                // console.log(path.resolve(dir_walk));
            })
    }
})