# Libreria sandraortiz-mdlinks
Esta libreria  lee y analizal los  archivos en formato Markdown ya se un solo archivo o una carpeta de archivos , para verificar los links que contengan y reportar algunas estadísticas.  
 
#Instalacion 

npm install sandraortiz/lim20181-Track-FE-markdown-list

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio.
- `options`: Un objeto con las siguientes propiedades:
- `validate`: Valor que determina si se desea validar los links encontrados en el archivo. (tipo de dato booleano)
- `stats`: Valor que determina si se desea calcular los stats de de los links encontrados en el archivo. (tipo de dato booleano)

##### Valor de retorno

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js
const mdLinks = require("lim20181-track-fe-markdown-list");

mdlinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdlinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdlinks("./some/example.md", { stats: true })
  .then(links => {
    // => [{ total, unique }]
  })
  .catch(console.error);

 mdlinks("./some/example.md", { stats: true, validate:true })
  .then(links => {
    // => [{total, unique, broken }]
  })
  .catch(console.error);
  
mdlinks("./some/dir" )
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Línea de comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`mdlinks <path-to-file> [options]`

Por ejemplo:

```sh
$ mdlinks ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ mdlinks ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ mdlinks ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ mdlinks ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## Checklist

### General

- [ ] Entrega el link del módulo publicado en npm

### `README.md`

- [ ] Un board con el backlog para la implementación de la librería.
- [ ] Documentación técnica de la librería.
- [ ] Guía de uso e instalación de la librería

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [ ] Pasa tests (y linters) (`npm test`).
