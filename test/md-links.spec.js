const { mdLinks } = require('../index.js');

const { getFileExtension } = require('../function.js')
describe('obtener extension', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

  it('debería obtener la extensión del archivo', () => {
    const file = 'README.md';
    const extension = '.md';
    const result = getFileExtension(file);
  });


});
