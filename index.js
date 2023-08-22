const { existsPath,readFile, getFileExtension} = require('./function');

const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
    
 console.log(existsPath(path))
 console.log(getFileExtension(path))
 console.log(readFile(path))
 
})


}
mdLinks('README.md')
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})
module.exports = {
mdLinks
}