const { existsPath,
    readFile,
    getFileExtension,
    isDirectory,
    markdownFiles,
    absolutePath,
    turnAbsolute,
    extractLinks,
    validateLinksInFile,
    statsLinks,
    statsBrokenLinks

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

        if (getFileExtension(path)) {
            readFile(path).then((fileContent) => {
                const arrayLinks = extractLinks(fileContent, path)
                if (arrayLinks) {

                    validateLinksInFile(fileContent, path)

                        .then((results) => {
                            if (options.validate === true && options.stats === false) {
                                return resolve({ links: results })
                            } else if (options.validate === false && options.stats === true) {
                                return resolve({ stats: statsBrokenLinks(results) })
                            } else if (options.validate === true && options.stats === true) {
                                return resolve({ links: results, stats: statsBrokenLinks(results) })
                            }
                            
                            return resolve (extractLinks(fileContent, path))

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


    )


}
// mdLinks('pruebas/prueba1.md', { validate: true, stats: true })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

module.exports = {
    mdLinks
}