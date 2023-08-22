
const { mdLinks }  = require('../index.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

  /*
  it('should return a promise', () => {
   expect(mdLinks()).toBe(typeof Promise)
  })*/

  it('debe rechazar cuando el path no existe', () => {
    return mdLinks('./EstaRutaNo.md').catch((error) => {
      expect(error).toBe('La ruta no existe')
    })
  })
  
  it('debe rechazar cuando no es un directorio', () => {
    return mdLinks('./README.md').catch((error) => {
      expect(error).toBe('No es un directorio')
    })
  })

});
