function calculos(x, y) {
    let sum = x + y
    let sub = x - y
    let div = x / y
    let mul = x * y
    return `sum: ${sum}, sub: ${sub}, div: ${div}, mul: ${mul}`
}

console.log(calculos(6,2))