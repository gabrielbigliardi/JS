//AULA 173, falta finalizar, problemas no temporizador!!

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 10000)

