const pares = (valorInicial, valorFinal) => {
    let pares = []
    while (valorInicial <= valorFinal) {
        if(valorInicial % 2 === 0) {
            pares.push(valorInicial)
        }
        valorInicial++
    }
    return pares
}

console.log(pares(2, 70))