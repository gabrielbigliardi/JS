function valorDoPlano(idade) {
    let valorAPagar = 100
    if (idade < 0) {
        return 'Idade impossível'
    } else if (idade < 10 ){
        valorAPagar += 80
    } else if (idade < 30) {
        valorAPagar += 50
    } else if (idade < 60) {
        valorAPagar += 95 
    } else {
        valorAPagar += 130
    }
    return `R$ ${valorAPagar.toFixed(2)}`
}

console.log(valorDoPlano(-1))
console.log(valorDoPlano(0))
console.log(valorDoPlano(8))
console.log(valorDoPlano(10))
console.log(valorDoPlano(40))
console.log(valorDoPlano(59))
console.log(valorDoPlano(61))
console.log(valorDoPlano(82))