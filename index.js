const { existsPath,readFile, getFileExtension, isDirectory} = require('./function');

const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
    if(existsPath(path)) {
        console.log(existsPath(path))
    } else {
        reject('La ruta no existe')
    }
 
    if(isDirectory(path)) {
        console.log(isDirectory(path))
    } else {
        reject('No es un directorio')
    }
    console.log(getFileExtension(path))
    
    console.log(readFile(path))
 
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