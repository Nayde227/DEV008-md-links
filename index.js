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

const mdLinks = (path, options = { stats: false, validate: false }) => {
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
                            if (options && options.stats) {
                                if (options.validate) {
                                    return resolve({ links: results, stats: statsBrokenLinks(results) })
                                } else {
                                    return resolve({ links: results, stats: statsLinks(results) })
                                }
                            } return resolve({ links: results })

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