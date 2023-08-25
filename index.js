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
        if (absolutePath(path)) {
            console.log(turnAbsolute(path))
        }
    } else {
        reject('La ruta no existe')
    }
 
    if(isDirectory(path)) {
       console.log(isDirectory(path))
        console.log(markdownFiles(path))
        //console.log(readFile(path)) NO ME LEE ARCHIVOS DENTRO DE UN DIRECTORIO
    } else {
        if(getFileExtension(path)){
            console.log(getFileExtension(path))
            console.log(readFile(path))
         } else {
            reject('No es un archivo .md')
         }
        
    }

    
})


}
mdLinks('./README.md')
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})
module.exports = {
mdLinks
}