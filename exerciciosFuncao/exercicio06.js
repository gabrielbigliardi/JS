function jurosSimples (capInicial, taxJuros, tempAplic) {
    return capInicial * taxJuros * tempAplic
}

function jurosComposto (capInicial, taxJuros, tempAplic) {
    return capInicial * Math.pow(1 + taxJuros, tempAplic)
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosComposto(100, 10/100, 2))