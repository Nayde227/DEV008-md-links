
const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
   
    const existsFile = (path) => {
        return fs.existsSync(path)
    }
    
    if (existsFile) {
        console.log('El archivo EXISTE');
    } else {
        reject(console.log('El archivo NO EXISTE!'));
    }

    
})


}

module.exports = {
mdLinks
}