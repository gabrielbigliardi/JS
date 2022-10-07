function valorPlano (idade) {
    let valorInicial = 100
    if (idade < 10) {
        return valorInicial += 80
    } else if (idade < 30) {
        return valorInicial += 50
    } else if(idade < 60) {
        return valorInicial += 95
    } else if (idade < 150) {
        return valorInicial += 130
    }
}

console.log(valorPlano(30));
console.log(valorPlano(61));
console.log(valorPlano(5));
console.log(valorPlano(25));