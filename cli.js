const { mdLinks } = require('./index')

const [, , ...args] = process.argv
console.log(args)
const path = args[0]
const validate = args.includes('--validate')
const stats = args.includes('--stats')
const options = {validate, stats}
console.log(options)

mdLinks(path, options)
.then((result) => {
    //condicionar options y validate
    
    console.log(result)
    
})
.catch((err) => {
    console.log(err)
})




//node, cli,  devuelve una ruta (sin options) ==> node cli.js 'index.js' deberia devolver esto => [index.js]
//node, cli, (devuelve ruta), --stats ==> node cli.js 'index.js' --stats => [ 'index.js', '--stats' ]
//node, cli, (devuelve ruta), --validate ==> node cli.js 'index.js' --validate => [ 'index.js', '--validate' ]
//node, cli, (devuelve ruta), --validate --stats => node cli.js 'index.js' --validate --stats => [ 'index.js', '--stats', '--validate' ]
//node, cli, (devuelve ruta), --stats --validate => node cli.js 'index.js' --stats --validate[ 'index.js', '--stats', '--validate' ]



//const path = process.argv[2]
// const options = {
//     stats: process.argv.includes("--stats"),
//     validate: procces.argv.includes("--validate")
// }

// mdLinks('pruebas/prueba1.md', { validate: true, stats: true })
// .then((links) => console.log(links))
// .catch((error) => console.log(error))