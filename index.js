const { existsPath,
    readFile, 
    getFileExtension, 
    isDirectory, 
    markdownFiles, 
    absolutePath,
    turnAbsolute 
    } = require('./function');

const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
    if(existsPath(path)) {
        console.log(existsPath(path))
    } else {
        reject('La ruta no existe')
    }
 
    if(isDirectory(path)) {
        console.log(isDirectory(path))
        console.log(markdownFiles(path))
    } else {
        reject('No es un directorio')
    }

    if(absolutePath)
    console.log(getFileExtension(path))
    
    console.log(readFile(path))
    
    console.log(turnAbsolute(path))
    
})


}
mdLinks('./pruebas')
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})
module.exports = {
mdLinks
}