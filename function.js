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

const turnAbsolute = (filePath) => absolutePath(routes(filePath));

//console.log(turnAbsolute('./pruebas'))


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
    //console.log(linkRegex.exec('')) // para leer todas las coincidencias del array

    while ((match = linkRegex.exec(fileContent)) !== null) {
        const linkText = match[1].slice(0, 30)
        const url = match[2]
        links.push({ text: linkText, url: url, file: filePath }); //(agrega un objeto al array links)
    }

    return links;
}

//Petición HTTP 

// Función para validar un enlace con su status
const checkLink = (link) => {
    return axios.get(link.url)
        .then((response) => {
            //console.log({ url, status: response.status, message: 'Ok' })
            return ({ ...link, status: response.status, message: 'Ok' })// ...link 
        })
        .catch((err) => {
            if (err.response) {
                // console.log({ url, status: err.response.status, message: 'No funciona =(' })
                return { ...link, status: err.response.status, message: 'Error' };
            } else {
                return { ...link, status: 'Error', message: err.message };
            }
        });
}


// checkLink("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });


// Función para validar todos los enlaces en el archivo

const validateLinksInFile = (fileContent, filePath) => {
    const linksInFile = extractLinks(fileContent, filePath)
    const linksPromise = linksInFile.map(checkLink)
    return Promise.all(linksPromise)
}



// validateLinksInFile('pruebas/prueba1.md')
//     .then(results => {
//         console.log(results)
//     })
//     .catch(error => {
//         console.error(error)
//     })

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


