const fs = require('fs');
const path = require('path');

//validar si la ruta existe existe
const existsPath = (filePath) => {
    return fs.existsSync(filePath)
}


//validar si la ruta es un directorio
const isDirectory = (dirPath) => {
    return fs.lstatSync(dirPath).isDirectory();
}



//Función para obtener el contenido de un directorio (imprime en consola la lista de arch de un directorio)

const readDir = (filePath) => {
    return fs.readdirSync(filePath)
}

//Función para obtener la extensión del archivo y validar que sea md

const getFileExtension = (filePath) => {
    return path.extname(filePath) === '.md'
}

//filtrar los archivos md (Pedir ayuda para cambiar el argumento)

const files = readDir('./pruebas');

const markdownFiles = files.filter(fileName => getFileExtension(fileName));




   // console.log(getFileExtension('./thumb.png'))



//Unir dos segmentos de rutas 

const routes = (filePath) => path.join(filePath);

//obtener ruta absoluta

const absolutePath = (filePath) => path.resolve(filePath);


// transformar ruta relativa en absoluta 

const turnAbsolute = (filePath) =>  absolutePath(routes(filePath));
 
//console.log(turnAbsolute('./pruebas'))

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

module.exports = {  existsPath,
     readFile,
     getFileExtension, 
     isDirectory, 
     markdownFiles, 
     absolutePath,
     turnAbsolute}