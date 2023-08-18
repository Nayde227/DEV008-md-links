const fs = require('fs');
const path = require('path');
//const index = require('./index');



//validar si la ruta existe FUNCIONA
const existsDir = fs.access('README.md', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('La ruta no existe');
    } else {console.log('La ruta existe');}
    
    
})

//validar si el archivo existe

//console.log(index.mdLinks(path, options))


//Función para leer el archivo FUNCIONANDO
const readFile = fs.readFile('README.md',  (err, data) => {
if(err){
    console.log('no se ha podido leer el archivo');
} else {
    console.log(data.toString());
}
});

//Función para obtener la extensión del archivo

const getFileExtension = path.extname('README.md')
console.log(getFileExtension)
//Función para obtener el contenido de un directorio (imprime en consola la lista de arch de una file)

const readDir = fs.readdirSync('./coverage');
console.log(readDir);

//Unir dos segmentos de rutas 

const routes = path.join('test','md-links.spect.js');
console.log(routes);

//obtener ruta absoluta
const absolutePath = path.resolve('test', 'md-links.spec.js');
console.log(absolutePath);

// transformar ruta relativa en absoluta

//validar que sea archivo o directiorio

//validar que sea un archivo .md


module.exports = {absolutePath, readFile, getFileExtension, existsDir}