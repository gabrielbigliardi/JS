function repetir(x, y) {
    let cont = 0
    let resultado = []

    while (cont < y) {
        resultado.push(x)
        cont++
    }
    return resultado
}

console.log(repetir('codigo', 2))
console.log(repetir(7, 3))

// usando propriedades do objeto array:

function repetirNoArray(x, y) {
    return Array(y).fill(x)
}

console.log(repetirNoArray('codigo', 2));
console.log(repetirNoArray(7, 3));