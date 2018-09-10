const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');
const arrayUniques = require('array-unique');

const validarStatus = (arrayLinks) => {
  const arrayDePromises = arrayLinks.map(link => fetch(link));
  return Promise.all(arrayDePromises)
    .then(response => {
      const links = arrayLinks.map((objAnswer, statuslink) => {
        objAnswer.status = response[statuslink].status;
        objAnswer.statusText = response[statuslink].statusText;
        return objAnswer;
      });
      return links;
    })
}

const searchLink = (arrayFiles) => {
  const links = [];
  arrayFiles.forEach(file => {
    const data = fs.readFileSync(file, 'utf8');
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      links.push({
        href: href,
        text: text,
        file: file
      });
    };
    marked(data, { renderer });
  })
  return links;
}

const readFileOrDirectory = (routeAbsolute) => {
  let arrfiles = [];
  const stats = fs.statSync(routeAbsolute)
  if (stats.isFile() && path.extname(routeAbsolute) === '.md') {
    arrfiles.push(routeAbsolute);
  }
  else if (stats.isFile() && path.extname(routeAbsolute) !== '.md') {
    console.log(routeAbsolute + 'no es archivo markdown');
  }
  else {
    const files = fs.readdirSync(routeAbsolute);
    files.forEach(file => {
      arrfiles = arrfiles.concat(readFileOrDirectory(path.join(routeAbsolute, file)));
    });
  }
  return arrfiles;
}

const mdLinks = (route, options) => 
  new Promise((resolve, reject) => {
    if (fs.existsSync(route)) {
      const routeAbsolute = path.resolve(route)
      const FileOrDirectory = readFileOrDirectory(routeAbsolute)
      const arrayLinksInfo = searchLink(FileOrDirectory)
      if (options.stats && options.validate) {
        validarStatus(arrayLinksInfo)
          .then((response) => {
            resolve([{
              total: response.map(link => link.href).length,
              broken: response.filter(link => link.status == 404).length,
              unique: arrayUniques(response.map(link => link.href)).length
            }])

          });
      }
      else if (options.validate === true) {
        validarStatus(arrayLinksInfo)
          .then((response) => {resolve(response)});
      }
      else if (options.stats === true) {
        validarStatus(arrayLinksInfo)
          .then((response => {
            resolve([{
              total: response.map(link => link.href).length,
              unique: arrayUniques(response.map(link => link.href)).length
            }])
          }));
      }
      else {
        resolve(arrayLinksInfo)
      }
    }
    else {
      reject('la ruta no es valida')
    }
  })


module.exports = mdLinks;
