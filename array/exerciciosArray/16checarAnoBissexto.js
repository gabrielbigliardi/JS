function checarAnoBissexto(ano) {
    let divisivelPorQuatro = ano % 4 == 0
    let divisivelPorCem = ano % 100 == 0
    let divisivelPorQuatrocentos = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))