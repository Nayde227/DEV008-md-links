
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
// console.log(getFileExtension('./thumb.png'))


//filtrar los archivos md (Pedir ayuda para cambiar el argumento)

const markdownFiles = (filePath) => readDir(filePath).filter(filePath => getFileExtension(filePath));
 // file => getFileExtension(file) devuelve true o false

 //console.log(markdownFiles('./pruebas'))

   
//Unir dos segmentos de rutas 

const routes = (filePath) => path.join(filePath);

//obtener ruta absoluta

const absolutePath = (filePath) => path.resolve(filePath);


// transformar ruta relativa en absoluta 

const turnAbsolute = (filePath) =>  absolutePath(routes(filePath));
 
//console.log(turnAbsolute('./pruebas'))

//Función para leer el archivo

const readFile = (filePath) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.log('No se pudo leer el archivo');
                reject (err)
            } else {
                console.log('readFile', data); // Imprime el contenido del archivo leído
                resolve (data)
            }
        });
    })
    
};

//--------------------------- ExtractLinks and Stats-------------------

// Función para extraer links

function extractLinks(fileContent, filePath) {
    
    const linkRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
    const links = [];
    let match;
    //console.log(linkRegex.exec(fileContent))

    while ((match = linkRegex.exec(fileContent)) !== null) {
       
        const [, linkText, url] = match; 
        links.push({ linkText, url, filePath }); 
    }
    
    return links;
}

//  let pruebaLink = '[Github](https://github.com/Nayde227/DEV008-md-links)'
//  let pruebaDos = '[Google](https://calendar.google.com/calendar/u/0/r/week)'
//   console.log(extractLinks(pruebaLink + pruebaDos))


module.exports = {  existsPath,
     readFile,
     getFileExtension, 
     isDirectory, 
     markdownFiles, 
     absolutePath,
     turnAbsolute,
    extractLinks}














     

//      var linkRegex = /(https?:\/\/[^ ]*)/;

// var input = "https://medium.com/aspen-ideas/there-s-no-blueprint-26f6a2fbb99c random stuff sd";
// var url = input.match(linkRegex)[1];
// console.log(url);