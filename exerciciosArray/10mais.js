function mais (x) {
    let resultado = ''
    for(let i = 0; i < x; i++) {
        resultado += '+'
    }
    return resultado
}

console.log(mais(2))
console.log(mais(5))


const maisMais = y => { return Array(y).fill('+').join('') }

console.log(maisMais(5))
console.log(maisMais(2))