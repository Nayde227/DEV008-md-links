const { absolutePath, existsFile, existsDir } = require('./function')
const functions = require ('./mdLinks')


const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
   
    //Validar que el archivo existe
    
    if(!existsFile){
        reject('file not exists')
    } else {
        console.log('file exists')
    }
})
}

module.exports = {
mdLinks
}