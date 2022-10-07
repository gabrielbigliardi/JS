function receberPrimeiroEUltimo (arrayQlqr) {

    let primeiroItem = arrayQlqr.shift()
    let ultimoItem = arrayQlqr.pop()
    return [primeiroItem, ultimoItem]

}

console.log(receberPrimeiroEUltimo([10, 9, 20]))