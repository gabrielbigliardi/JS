const fs = require('fs') // referencia do filesystem, modulo leitura interno do note

const caminho = __dirname + '/arquivo.json'

// sincorno...
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo);

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})