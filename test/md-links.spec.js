const { existsPath } = require('../function.js');
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
  

});
