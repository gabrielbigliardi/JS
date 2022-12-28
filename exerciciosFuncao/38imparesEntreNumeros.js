function imprimirImpares(x, y) {
    if(x > y) {
        let aux = x
        x = y
        y = aux
    }
    let impares = []
    for(let i = x; i < y; i++) {
        if(i % 2 !== 0) {
            impares.push(i)
        }
    }
    return impares
}

console.log(imprimirImpares(0, 100))