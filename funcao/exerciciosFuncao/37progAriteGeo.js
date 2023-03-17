function progAritmetica(termos, primeiro, razao) {
    let result = primeiro

    for(let i = 0; i < termos; i++) {
        result += razao
    }
    return result
}

console.log(progAritmetica(3, 2, 6))

function progGeometrica(termos, primeiro, razao) {
    let posicao = termos - 1
    return primeiro * (Math.pow(razao, posicao))
}

console.log(progGeometrica(3, 2, 6));