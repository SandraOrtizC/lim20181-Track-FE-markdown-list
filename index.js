const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');
const arrayUniques = require('array-unique');

const validarStatus = (arrLinks) => {
  const arrayDePromises = arrLinks.map(link => fetch(link));
  return Promise.all(arrayDePromises)
    .then(response => {
      const links = arrLinks.map((objRespuesta, statuslink) => {
        objRespuesta.status = response[statuslink].status;
        objRespuesta.statusText = response[statuslink].statusText;
        return objRespuesta;
      });
      return links;
    })
}


const searchLink = (resultado) => {
  const links = [];
  resultado.forEach(file => {
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
  else if (stats.isDirectory()) {
    const files = fs.readdirSync(routeAbsolute);
    files.forEach(file => {
      arrfiles = arrfiles.concat(readFileOrDirectory(path.join(routeAbsolute, file)));
    });
  }
  return arrfiles;
}

const mdLinks = (route, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(route)) {
      const routaAbsolute = path.resolve(route)
      const read = readFileOrDirectory(routaAbsolute)
      const array = searchLink(read)
      if (options.stats && options.validate) {
        validarStatus(array)
          .then((respuesta) => {
            resolve([{
              total: respuesta.map(link => link.href).length,
              broken: respuesta.filter(link => link.status == 404).length,
              unique: arrayUniques(respuesta.map(link => link.href)).length
            }])

          });
      }
      else if (options.validate === true) {
        validarStatus(array)
          .then((respuesta) => { resolve(respuesta) });
      }
      else if (options.stats === true) {
        validarStatus(array)
          .then((respuesta) => {
            resolve([{
              total: respuesta.map(link => link.href).length,
              unique: arrayUniques(respuesta.map(link => link.href)).length
            }])
          });
      }
      else {
        resolve(array)
      }
    }
    else{
      reject('la ruta no es valida')
    }
  })
}

module.exports = mdLinks;
