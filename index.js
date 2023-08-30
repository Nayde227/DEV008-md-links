const { existsPath,
    readFile, 
    getFileExtension, 
    isDirectory, 
    markdownFiles, 
    absolutePath,
    turnAbsolute, 
    extractLinks,
    
    } = require('./function');

const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
    if(existsPath(path)) {
        console.log(existsPath(path))
        if (absolutePath(path)) {
            console.log('vuelvo absoluta', turnAbsolute(path))
        }
    } else {
        reject('La ruta no existe')
    }
 
    if(isDirectory(path)) {
        console.log(extractLinks(fileContent, path))
                
            
        
    } else {
        if(getFileExtension(path)){
            readFile(path).then((fileContent) => {
               
               console.log(extractLinks(fileContent, path)) 
            })
            
             
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