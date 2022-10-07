function multiplicar(x, y) {
    let resultado = 0
    if (x >= 0 && y >= 0) {

        for (let i = 0; i < y; i++) {
            resultado += x
        }
        return resultado

    } else {
        return 'numero negativo'
    }
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 5))

const multiplicarRecursivo = (numero, multiplicador) => {

    if (multiplicador === 0 || numero === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicarRecursivo(numero, multiplicador - 1) 
}

console.log(multiplicarRecursivo(5, 5))
console.log(multiplicarRecursivo(5, 1))
console.log(multiplicarRecursivo(5, 0))
