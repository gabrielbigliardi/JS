const menorNumero = arr => {
    
    return arr.reduce((anterior, atual) => atual < anterior ? atual : anterior ) 
    
}

console.log(menorNumero([3, 6, 10, 9]))


const menorNumero1 = arr => {
    let primeiro = arr[0]
    let menor

    for(let i in arr) {
        if (arr[i] < primeiro) {
            menor = arr[i]
        }
    }
    return menor
}

console.log(menorNumero1([3, 6, 2, 9]))