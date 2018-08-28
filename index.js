const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch')
///(\b(http?|https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; solo la url
const results = [];
const mdlinks = (route, options) => {
    return new Promise((resolve, reject) => {
        fs.stat(route, (err, stat) => {
            if (err) return reject(err.code);
            if (stat.isFile()) {
                // readFile(route , (err , links) =>{
                //          if (err) return reject(err.code);
                // //    return resolve(selectOptions(links, options)); 
                // } )
            return resolve(results)
            }
            else if (stat.isDirectory()) {
                
            return resolve(results)
                // readFolder()
                //   readFolder(route, (err, links) => {
                //     if (err) return reject(err.code);
                //         // return resolve(links);
                //   })
            }
        })

    });
}
module.exports = mdlinks;