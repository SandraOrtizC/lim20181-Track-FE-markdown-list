// libreria recorre el archivo y los filtra por extension 
// let klaw = require('klaw'),
// path = require('path'),
// through2 = require('through2'),
// dir_walk = process.argv[2] || process.cwd();


// klaw(dir_walk)

// .pipe(through2.obj(function (item, enc, next) {

//         let ext = path.extname(item.path);

//         if (ext.toLowerCase() === '.md' || ext.toLowerCase() === '.md') {

//             this.push(item);

//         }

//         next();

//     }))

// .on('data', function (item) {

//     console.log(item.path);

// });