const mongoose = require('mongoose')

//conexao com banco de dados
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch (e => {
        const msg = 'ERRO! Não foi possivel conectar com o MongoDB!'
        console.log('blabla')
    })