let vetorInteiro = [10, 20, 30, 40]
let vetorString = ['dez', 'vinte', 'trinta', 'quarenta']
let vetorDouble = [10.2, 20.3, 30.4, 40.1]

const resultado = vetorInteiro.concat(vetorString, vetorDouble)

function resultadoComFuncao (...arguments) {
    let resultadoArray = []
    for (let i = 0; i < arguments.length; i++) {
        resultadoArray = resultadoArray.concat(arguments[i])
    }
    return resultadoArray
}

console.log(resultado);
console.log(resultadoComFuncao(vetorInteiro, vetorString))
console.log(resultadoComFuncao(vetorString, vetorDouble))