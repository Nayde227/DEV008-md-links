const { existsPath,readFile, getFileExtension} = require('./function');

const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
    if(existsPath(path)) {
        console.log(existsPath(path))
    } else {
        reject('La ruta no existe')
    }
 
    console.log(getFileExtension(path))
    
    console.log(readFile(path))
 
})


}
mdLinks('READM.d')
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})
module.exports = {
mdLinks
}