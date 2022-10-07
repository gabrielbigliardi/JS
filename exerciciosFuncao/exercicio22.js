function valorPagarAnuidade(mes, valor) {
    if (mes == 1) {
        return valor
    } else {
        let juros = valor * ((calculoJuros(mes) * 5) / 100)
        return valor + juros
    }

}

function calculoJuros(mes){
    let contadorMes = 2
    while (contadorMes != mes) {
        contadorMes++
    }
    return contadorMes

}

console.log(valorPagarAnuidade(2, 100));