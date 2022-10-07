const somarNumeros = arr => {
    let soma = 0
    for(let i in arr) {
        soma += arr[i]
    }
    return soma
}

let arr1 = [2, 3, 5]

console.log(somarNumeros(arr1))
console.log(somarNumeros([10, 20, 30 ,40]))
console.log(somarNumeros([]))



const somarNumeros2 = arr => {
    let soma = 0
    arr.forEach(elemento => soma += elemento);
    return soma
}

console.log(somarNumeros2(arr1))



const somarNumeros3 = arr => {
    
    return arr.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    
}

console.log(somarNumeros3(arr1))
console.log(somarNumeros3([10, 24, 66, 91, 3]))
