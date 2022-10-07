// let p = new Promise(function(cumprirPromessa){
//     cumprirPromessa({
//         x: 3, y:4
//     })
// })

// p.then(function(valor){
//     console.log(valor.y)
// })


let pr = new Promise(function(resolve){
    resolve(['Pedro', 'Juca', 'Guiga', 'Thiago'])
})

function primeiroElemento(vetor) {
    return vetor[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

pr
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)


const p = new Promise(function(resolve) {
    resolve(['Aurora', 'Jimi', 'Bela'])  
})

p   .then(primeiro => primeiro[0])
    .then(primeiro => primeiro[0])
    .then(letraMinusc => letraMinusc.toLowerCase())
    .then(console.log)