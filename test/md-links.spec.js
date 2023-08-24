
const { mdLinks }  = require('../index.js');


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
/*
describe()
it('debe obtener la extensión de un arvchivo', () => {
  return mdLinks('./pruebas').catch((error) => {
    expect(error).toBe('No se pudo leer el archivo')
  })
})
*/
