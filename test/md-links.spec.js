
const { mdLinks }  = require('../index.js');
const { getFileExtension, markdownFiles, turnAbsolute, absolutePath, isDirectory, existsPath, readDir } = require('../function.js')
/*
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
*/
  

  describe("Is a function", () => {
    it("getFileExtension Es una función", () => {
      expect(typeof getFileExtension).toBe("function");
    });

    it("markdowFiles Es una función", () => {
      expect(typeof markdownFiles).toBe("function");
    });

    it("turnAbsolute Es una función", () => {
      expect(typeof turnAbsolute).toBe("function");
    });

    it("absolutePath Es una función", () => {
      expect(typeof absolutePath).toBe("function");
    });

    it("isDirectory Es una función", () => {
      expect(typeof isDirectory).toBe("function");
    });

    it("existsPath", () => {
      expect(typeof existsPath).toBe("function");
    });

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
})
//Este no se muestra en los test
describe('markDownFiles', () => {
  const filePath = './pruebas'
  const expected = ["prueba1.md", "prueba2.md"];
  const result = markdownFiles(filePath);

expect(result).toEqual(expected);
})
