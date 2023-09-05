const mdLinks = require('./index')

const path = process.argv[2]
const options = {
    stats: process.argv.includes("--stats"),
    validate: procces.argv.includes("--validate")
}

mdLinks('pruebas/prueba1.md', { validate: true, stats: true })
.then((links) => console.log(links))
.catch((error) => console.log(error))
// const [, , ...args] = process.argv
// const path = args[1]
// const validate = args[2].includes(--validate)
// const stats = args[2].includes(--stats)
// const options = {validate, stats}

// mdLinks('pruebas/prueba1.md', stats)
// .then((result) => {
//     //condicionar options y validate
//     if(validate === true){
//     console.log(result)
//     }
// })
// .catch((err) => {
//     console.log(err)
// })