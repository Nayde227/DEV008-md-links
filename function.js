const fs = require('fs');

fs.readFile('./README.md',  function(err, data){
if(err){
    console.log('ocurrió un error');
} else {
    console.log(data.toString());
}
});