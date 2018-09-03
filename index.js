const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

const uniqueLinks = (links) => {
    return [...new Set(links)];
}
const validarStatus = (links) => {
    return fetch(links.href)
        .then(response => {
            links.status = res.status;
            links.statusText = res.statusText;
            return links
        })
        .catch(err => {
            links.codeError = err.code;
            return links
        })
}
 const linksInfo = []
const linkContent = (routeAbsolute) => {

    const datalink = fs.readFileSync(routeAbsolute, 'utf8');
    const renderer = new marked.Renderer();
    renderer.link = (href, route, text) => {
        linksInfo.push({ href, text, route: routeAbsolute });
    };
    marked(datalink, { renderer });
    return linksInfo
    
}




const checkFileMd = (file) => {
    if (path.extname(file) === '.md') {
        return file;
    }
};

const readFileOrDirectory = (routeAbsolute) => {
    const stats = fs.statSync(routeAbsolute)
    if (stats.isFile()) {
        if (checkFileMd(routeAbsolute)) {
            linkContent(routeAbsolute)
        }
    }
    else if (stats.isDirectory()) {
        let files = fs.readdirSync(routeAbsolute);
        files.map((file) => {
            readFileOrDirectory(routeAbsolute + '/' + file);
        });
    }
}



const mdlinks = (route, options) => {
    return new Promise((resolve, reject) => { 
       options.validate = false
       options.stats = false
  if (fs.existsSync(route)) {
      const routeAbsolute = path.resolve(route)
      if (!options.validate && !options.stats) {
        readFileOrDirectory (routeAbsolute)
          linksInfo.map(link => {
            console.log(`${link.route}\t${link.href}\tLink a\t${link.text}\r\n`);
           })
          }
        else if(options.validate === true && options.stats===undefined) {
            readFileOrDirectory (routeAbsolute)
            linksInfo.map(link => {
              console.log(`${link.route}\t${link.href}`);
             })
        }

}
})
}

module.exports = mdlinks;
