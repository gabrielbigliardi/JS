const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao('Jumba'))


app.use('/opa', (req, res, next) => {
    console.log('Antes...');
    next()
})



app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})


app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})


app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})




app.get('/opa', (req, res, next) => {

    console.log('Durante...')

    res.json({
        data: [
            { id: 3, name: 'Rorica', position: 1 },
            { id: 24, name: 'Bebe', position: 2 },
            { id: 99, name: 'Raposo', position: 3 },
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200,
    })

    next()


    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1989.00,
    //     discount: 0.12
    // })


    // res.send('Estou <b>bem!</b>')

})


app.use('/opa', (req, res, next) => {
    console.log('Depois...');
    next()
})


app.listen(3000, () => {
    console.log(`Backend executando...`)
})