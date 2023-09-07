const axios = require('axios')
const fs = require('fs');
const { url } = require('inspector');
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

const markdownFiles = (filePath) => readDir(filePath).filter(filePath => getFileExtension(filePath));


//Unir dos segmentos de rutas 

const routes = (filePath) => path.join(filePath);


const absolutePath = (filePath) => path.resolve(filePath);



const turnAbsolute = (filePath) => absolutePath(routes(filePath));


//Función para leer el archivo

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                //console.log('No se pudo leer el archivo');
                reject(err, 'No se pudo leer el archivo')
            } else {
                //console.log('readFile', data); // Imprime el contenido del archivo leído
                resolve(data)
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

    while ((match = linkRegex.exec(fileContent)) !== null) {
        const linkText = match[1].slice(0, 30)
        const url = match[2]
        links.push({ text: linkText, url: url, file: filePath }); 
    }

    return links;
}

//Petición HTTP 

// Función para validar un enlace con su status
const checkLink = (link) => {
    return axios.get(link.url)
        .then((response) => {
            
            return ({ ...link, status: response.status, message: 'Ok' })// ...link 
        })
        .catch((err) => {
            if (err.response) {
                
                return { ...link, status: err.response.status, message: 'fail' };
            } else {
                return { ...link, status: 'Error', message: err.message };
            }
        });
}


// Función para validar todos los enlaces en el archivo

const validateLinksInFile = (fileContent, filePath) => {
    const linksInFile = extractLinks(fileContent, filePath)
    const linksPromise = linksInFile.map(checkLink)
    return Promise.all(linksPromise)
}


/* -----------------------Funciones de estadísticas-----------------------*/

    const statsLinks = (links) => {
       
        return { 
            Total: links.length,
             Unique: new Set (links.map((link) => link.url)).size
            }
    }

    const statsBrokenLinks = (links) => {
        const brokenLinks = links.filter((link) => link.message !== 'Ok')
        return {
            Total: links.length,
            Unique: new Set(links.map((link) => link.url)).size,
            Broken: brokenLinks.length
        }
    }
    

module.exports = {
    existsPath,
    readFile,
    getFileExtension,
    isDirectory,
    markdownFiles,
    absolutePath,
    turnAbsolute,
    extractLinks,
    checkLink,
    validateLinksInFile,
    statsLinks,
    statsBrokenLinks
}


