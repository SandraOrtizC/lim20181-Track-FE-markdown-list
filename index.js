// #!/usr/bin/env node
// const fs = require('fs');
// const path = require('path');


// const [, , ...args] = process.argv

// const filemdvalidate = () => {

// 	if (path.extname(`${args}`) !== '.md') {
// 		console.log('no se pudo leer el archivo');
// 	} 
	
// 	else{
// 		const mdfile = () => {
// 			console.log(`${args}`);

// 			fs.readFile(args[0], 'utf8', (err, buff) => {
// 				// console.log(buff.toString());
// 				// console.log('entre a fs');
// 			});
// 		}
// 			mdfile();

// 	} 
// }
// filemdvalidate()




// // console.log(process.argv)
// // console.log(args)



	

let klaw = require('klaw'),
path = require('path'),
through2 = require('through2'),
dir_walk = process.argv[2] || process.cwd();
 
// lets klaw
klaw(dir_walk)
 
// only html
.pipe(through2.obj(function (item, enc, next) {
 
        let ext = path.extname(item.path);
 
        if (ext.toLowerCase() === '.md' || ext.toLowerCase() === '.md') {
 
            this.push(item);
 
        }
 
        next();
 
    }))
 
// for each item that remains
.on('data', function (item) {
 
    console.log(item.path);
 
});
