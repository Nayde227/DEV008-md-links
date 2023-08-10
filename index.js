const paths = require('./function');

const mdLinks = (path, options) => {
return new Promise((resolve, reject) => {
    //si la ruta existe
   if(existsPath(path)){
    resolve(absolutePath);
   } else {
    reject('la ruta no existe');
   }
})
}

module.exports = () => {
mdLinks
}
