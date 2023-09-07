const { existsPath,
    readFile,
    getFileExtension,
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
            if (!absolutePath(path)) {
                turnAbsolute(path)
            }
        } else {
            reject('La ruta no existe')
        }

        if (getFileExtension(path)) {
            readFile(path).then((fileContent) => {
                const arrayLinks = extractLinks(fileContent, turnAbsolute(path))
                if (arrayLinks) {

                    validateLinksInFile(fileContent, turnAbsolute(path))

                        .then((results) => {
                            if (options.validate === true && options.stats === false) {
                                return resolve({ links: results })
                            } else if (options.validate === false && options.stats === true) {
                                return resolve({ stats: statsLinks(results) })
                            } else if (options.validate === true && options.stats === true) {
                                return resolve({ links: results, stats: statsBrokenLinks(results) })
                            }

                            return resolve(extractLinks(fileContent, turnAbsolute(path)))

                        })
                        .catch(error => {
                            reject(error)
                        })

                }
            })


        } else {
            reject('No es un archivo .md')
        }

    }


    )


}

module.exports = {
    mdLinks
}