const fs = require('fs');
const path = require('path');


const existsFile = (path) => {
    return fs.existsSync(path)
}

const main = (path, options) => {
    if(fs.existsSync(path)){
        console.log('El archivo EXISTE');
    } else {
        console.log('El archivo NO EXISTE!');
    }
    /*const response = {
        ok: false,
        data: []
    }
    const exists = existsFile(path)
    if(!exists) return response;
    response.ok = true
    return response;*/
}

/*const absPath = (path) => {
    return path.resolve(path)
}*/ 
module.exports = {
    main
}