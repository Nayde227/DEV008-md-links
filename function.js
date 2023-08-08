const fs = require('fs');

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