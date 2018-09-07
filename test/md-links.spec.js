const mdlinks = require('../index');

let options = {
  validate: false,
  stats: false
}
test('debería retornar un array de objetos con la propiedad href, text y path', () => {
  return mdlinks('test/testarchivos', options)
    .then(arraylinks => {
      expect(arraylinks).toEqual([{
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file:'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md'
      },
      {
        href: 'http://algo.com/2/3/',
        text: 'Node.js',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md'
      },
      {
        href: 'https://nodejs.org/es/',
        text: 'Node.js',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md'
      },
      {
        href: 'https://developers.google.com/v8/',
        text: 'motor de JavaScript V8 de Chrome',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md'
      }])
    })
})
test('debería retornar un array de objetos con la propiedad href, text y path , status , status text', () => {
  options.validate = true
  return mdlinks('test/testarchivos', options)
    .then(arraylinks => {
      expect(arraylinks).toEqual([{
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'http://algo.com/2/3/',
        text: 'Node.js',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md',
        status: 404,
        statusText: 'Not Found'
      },

      {
        href: 'https://nodejs.org/es/',
        text: 'Node.js',
        file: 'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://developers.google.com/v8/',
        text: 'motor de JavaScript V8 de Chrome',
        file:'C:\\Users\\sandraortiz\\Documents\\proyectos laboratoria\\lim20181-Track-FE-markdown-list\\test\\testarchivos\\1.md',
        status: 200,
        statusText: 'OK'
      }])

    })
})
test('debería retornar un array con un objeto con  la propiedad total, unicos', () => {
  options.stats = true
  options.validate = false
  return mdlinks('test/testarchivos', options)
    .then(arraylinks => {
      expect(arraylinks).toEqual(
        [{ total: 5, unique: 5 }]
      )

    })
})
test('debería retornar un array con un objeto  con la propiedad total, unicos y link rotos', () => {
  options.stats = true
  options.validate = true
  return mdlinks('test/testarchivos', options)
    .then(arraylinks => {
      expect(arraylinks).toEqual(
        [{ total: 5, broken: 1, unique: 5 }]
      )

    })
})
test('comprueba si mdlinks retorna un promesa que se resuelve con  un array de objetos ', () => {
  return expect(mdlinks('test/testarchivos', options)).toBeInstanceOf(Promise);
});
test('si la ruta  pasada no exite deberia rechazar la promesa', () => {
  expect.assertions(1);
  return expect(mdlinks('test/test', options)).rejects.toMatch('la ruta no es valida');
});

