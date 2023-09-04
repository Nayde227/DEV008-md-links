const { existsPath,
    readFile,
    getFileExtension,
    isDirectory,
    markdownFiles,
    absolutePath,
    turnAbsolute,
    extractLinks,
    checkLink,
    validateLinksInFile

} = require('./function');

const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        if (existsPath(path)) {
            console.log(existsPath(path))
            if (absolutePath(path)) {
                console.log('vuelvo absoluta', turnAbsolute(path))
            }
        } else {
            reject('La ruta no existe')
        }

        if (isDirectory(path)) {
            console.log(extractLinks(fileContent, path))



        } else {
            if (getFileExtension(path)) {
                readFile(path).then((fileContent) => {
                    const array = extractLinks(fileContent, path)
                    if (array) {
                        
                        validateLinksInFile(fileContent, path)

                            .then(results => {
                                console.log(results)
                            })
                            .catch(error => {
                                console.error(error)
                            })
                    }
                })


            } else {
                reject('No es un archivo .md')
            }

        }


    })


}
mdLinks('pruebas/prueba2.md')
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
module.exports = {
    mdLinks
}