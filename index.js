const { existsPath,
    readFile, 
    getFileExtension, 
    isDirectory, 
    markdownFiles, 
    absolutePath,
    turnAbsolute, 
    extractLinks,
    checkLink
    
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
               
               if(extractLinks(fileContent, path)) {
                console.log(extractLinks(fileContent, path))
               // console.log(checkLink(extractLinks(fileContent, path)))/*NO FUNCIONA*/
               }
            })
            
             
         } else {
            reject('No es un archivo .md')
         }
        
    }
    
    
})


}
mdLinks('pruebas/prueba1.md')
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})
module.exports = {
mdLinks
}