const { absolutePath } = require('./function')
const functions = require ('./mdLinks')

const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
    //Validar que el archivo existe
    
    if(!fs.existsSync(path)){
        reject(new Error ("file not exists"))
        return
    } else {
        resolve(fs.existsSync(path))
    }
})
}

module.exports = () => {
mdLinks
}
