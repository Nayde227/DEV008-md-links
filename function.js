const fs = require('fs');
const path = require('path');

//validar si la ruta existe existe
const existsPath = (filePath) => {
    return fs.existsSync(filePath)
}
//console.log(existsPath('README.md'));

//validar si la ruta es un directorio
const isDirectory = (dirPath) => {
    return fs.lstatSync(dirPath).isDirectory();
}
//console.log(isDirectory('./test'))


//Función para obtener el contenido de un directorio (imprime en consola la lista de arch de un directorio)

const readDir = (filePath) => {
    return fs.readdirSync(filePath)
}
console.log(readDir('./coverage'));


//Función para obtener la extensión del archivo y validar que sea md

const getFileExtension = (filePath) => {
    return path.extname(filePath) === '.md'
}
   // console.log(getFileExtension('./thumb.png'))



//Unir dos segmentos de rutas 

const routes = (filePath) => path.join(filePath);
console.log(routes('test', 'md-links.spect.js'));

//obtener ruta absoluta

const absolutePath = (filePath) => path.resolve(filePath);
console.log(absolutePath('test', 'md-links.spec.js'));

//Función para leer el archivo


const readFile = (filePath) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log('No se pudo leer el archivo');
        } else {
            console.log(data); // Imprime el contenido del archivo leído
        }
    });
};


// transformar ruta relativa en absoluta




module.exports = {  existsPath, readFile,getFileExtension, isDirectory }