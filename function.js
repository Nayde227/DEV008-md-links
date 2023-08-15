const fs = require('fs');
const path = require('path');
let file = 'README.md';
let folder = './test';

//validar si la ruta existe
const existsDir = fs.access(folder, fs.constants.F_OK, (err) => {
    console.log('La ruta existe');
   
    if (err) {
      console.error('La ruta no existe');}
})

//validar si el archivo existe
const existsFile = (path) => {
    return fs.existsSync(path)
}
/*
if (existsFile) {
    console.log('El archivo EXISTE');
} else {
    console.log('El archivo NO EXISTE!');
}*/


//Función para leer el archivo
const readFile = fs.readFile(file,  (err, data) => {
if(err){
    console.log('ocurrió un error');
} else {
    console.log(data.toString());
}
});

//Función para obtener la extensión del archivo


function getFileExtension(file){
    return file.split('.').pop();
} console.log(getFileExtension(file));

//Función para obtener el contenido de un directorio (imprime en consola la lista de arch de una file)

const readDir = fs.readdirSync(folder);
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


module.exports = {absolutePath, existsFile, readFile, getFileExtension, existsDir}