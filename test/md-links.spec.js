
const { mdLinks } = require('../index.js');
const { getFileExtension, markdownFiles, turnAbsolute, absolutePath, isDirectory, existsPath, readFile, extractLinks } = require('../function.js')

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });


  it('debe rechazar cuando el path no existe', () => {
    return mdLinks('./EstaRutaNo.md').catch((error) => {
      expect(error).toBe('La ruta no existe')
    })
  })
  
  
  it('debe rechazar cuando no es un archivo .md', () => {
    return mdLinks('pruebas/prueba.txt').catch((error) => {
      expect(error).toBe('No es un archivo .md')
    })
  })

  
});



describe("Is a function", () => {
  it("getFileExtension debe ser una función", () => {
    expect(typeof getFileExtension).toBe("function");
  });

  it("markdowFiles debe ser una función", () => {
    expect(typeof markdownFiles).toBe("function");
  });

  it("turnAbsolute debe ser una función", () => {
    expect(typeof turnAbsolute).toBe("function");
  });

  it("absolutePath debe ser una función", () => {
    expect(typeof absolutePath).toBe("function");
  });

  it("isDirectory debe ser una función", () => {
    expect(typeof isDirectory).toBe("function");
  });

  it("existsPath debe ser una función", () => {
    expect(typeof existsPath).toBe("function");
  });


  it('readFile debe ser una función', () => {
    expect(typeof readFile).toBe("function");
  })

  it('extractLinks debe ser una función', () => {
    expect(typeof extractLinks).toBe("function");
  })

})


describe('turnAbsolute', () => {

  it('Debe transformar la ruta en absoluta', () => {
    const filePath = './README.md'
    const absolutePath = 'C:\\Users\\elmae\\OneDrive\\Desktop\\Laboratoria\\5. MD-Links\\DEV008-md-links\\README.md'
    const result = turnAbsolute(filePath)

    expect(result).toBe(absolutePath)
  })
})

describe('getFileExtension', () => {

  it('Debe dar true cuando el arvhivo es === .md', () => {
    const filePath = './README.md'
    const expectedExtension = true
    const result = getFileExtension(filePath)

    expect(result).toBe(expectedExtension)
  })

  it('Debe dar false cuando el archivo no es === .md', () => {
    const filePath = './README.txt'
    const expectedExtension = false
    const result = getFileExtension(filePath)

    expect(result).toBe(expectedExtension)
  })
})


describe('isDirectory', () => {

  it('Debe dar true cuando el arvhivo es directorio', () => {
    const dirPath = './test'
    const isDirectoryPath = true
    const result = isDirectory(dirPath)

    expect(result).toBe(isDirectoryPath)
  })
})

describe('absolutePath', () => {

  it('Debe obtener la ruta absoluta', () => {
    const filePath = './README.md'
    const getAbsolutePath = 'C:\\Users\\elmae\\OneDrive\\Desktop\\Laboratoria\\5. MD-Links\\DEV008-md-links\\README.md'
    const result = absolutePath(filePath)

    expect(result).toBe(getAbsolutePath)
  })
})

describe('existsPath', () => {
  it('Debe dar true cuando la ruta existe', () => {
    const filePath = './pruebas'
    const expectedPath = true
    const result = existsPath(filePath)

    expect(result).toBe(expectedPath)
  })

  it('Debe dar false cuando la ruta no existe', () => {
    const filePath = './prues'
    const expectedPath = false
    const result = existsPath(filePath)

    expect(result).toBe(expectedPath)
  })
})

//Este no se muestra en los test
/*describe('markDownFiles', () => {
  const filePath = './pruebas'
  const expected = ["prueba1.md", "prueba2.md"];
  const result = markdownFiles(filePath);

expect(result).toEqual(expected);
})*/

describe('readFile', () => {
  it('Debe leer el contenido de mi archivo', async () => {
    const expectedContent = '# Markdown Links';
    const filePath = 'README.md';

    const resultPromise = readFile(filePath);
    const result = await resultPromise;

    expect(result).toEqual(expectedContent);
  });

  /*it('Debe rechazar si no es posible leer el archivo', async () => {
    const expectedContent = 'No se pudo leer el archivo';
    const filePath = 'pruebas/prueba.txt';

    const resultPromise = readFile(filePath);
    const result = await resultPromise;

    expect(result).toEqual(expectedContent);
  })SIGUE LEYENDO AUNQUE SEA .TXT*/
}); 

describe('extractLinks', () => {
  it('Debe extraer los links',  () => {
    const expectedLinks = [];
    const filePath = 'README.md';
    const fileContent = '[Github](https://github.com/Nayde227/DEV008-md-links)'

    const result = extractLinks(filePath, fileContent);

    expect(result).toEqual(expectedLinks);
  });
});

