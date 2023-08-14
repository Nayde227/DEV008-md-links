const fs = require('fs');
const path = require('path');

//Función para leer el archivo
fs.readFile('./README.md',  function(err, data){
if(err){
    console.log('ocurrió un error');
} else {
    console.log(data.toString());
}
});

//Función para obtener la extensión del archivo
let file = 'README.md';


function getFileExtension(file){
    return file.split('.').pop();
} console.log(getFileExtension(file));

//Función para obtener el contenido de un directorio
//(imprime en consola la lista de arch de una file)


let files = fs.readdirSync('./test');
console.log(files);

//Unir dos segmentos de rutas 


const ruta = path.join('test','md-links.spect.js');
console.log(ruta);

//convertir ruta relativa en absoluta
const absolutePath = path.resolve('test', 'md-links.spec.js');
console.log(absolutePath);


//validar si el archivo existe
if(fs.existsSync('README.md')){
    console.log('El archivo EXISTE');
} else {
    console.log('El archivo NO EXISTE!');
}

//validar si la ruta existe
fs.access('./test', fs.constants.F_OK, (err) => {
    console.log('La ruta existe');
   
    if (err) {
      console.error('La ruta no existe');}
})

//validar que sea archivo o directiorio
//validar que sea un archivo .md
module.exports = {absolutePath}