const fs = require('fs');
const path = require('path');

//validar si la ruta del directorio existe
const existsDir = fs.existsSync(path) 
if(fs.existsSync('./hola')){
    console.log('el directorio existe')
   } else { console.log('el directorio no existe')}


//Función para obtener el contenido de un directorio (imprime en consola la lista de arch de un directorio)

const readDir = fs.readdirSync('./coverage');
console.log(readDir);


//Función para obtener la extensión del archivo y validar que sea md

const getFileExtension = (path) => path.extname(path) === '.md'

if(getFileExtension){
    console.log('.md')
} else { console.log('este no es un archivo marckdown')}

//Unir dos segmentos de rutas 

const routes = path.join('test','md-links.spect.js');
console.log(routes);

//obtener ruta absoluta

const absolutePath = path.resolve('test', 'md-links.spec.js');
console.log(absolutePath);

//Función para leer el archivo

const readFile = fs.readFile('READM.md', 'utf-8', (err, data) => {

if(err) {
    console.log('no se pudo leer el archivo')
} else {
    console.log(data)
}
})



// transformar ruta relativa en absoluta




module.exports = {absolutePath, readFile, getFileExtension, existsDir}