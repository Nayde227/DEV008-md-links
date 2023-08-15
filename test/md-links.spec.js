const { mdLinks }  = require('../index.js');


describe('rechazar si el path no existe', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

  /*it('debería devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });*/

  it('debería rechazar la promesa si el path no existe', () => {
    return mdLinks('./EstaRutaNo.md').catch(() => {
      expect(error).toBe('file not exists')
    })
  })
  

});
