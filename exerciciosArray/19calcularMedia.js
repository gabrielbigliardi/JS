const calcularMedia = arr => {
    let media = 0
    let elementos = 0
    arr.forEach(element => {
        media += element
        elementos++
    })
    return media / elementos
}

console.log(calcularMedia([2,4,7,90,173]))
console.log(calcularMedia([2,4,6,8]))

const calcularMedia1 = arr => {
    let numeroElementos = arr.length
    let soma = arr.reduce((acum, elem) => acum + elem)
    return soma / numeroElementos
}

console.log(calcularMedia1([2,4, 6,8]))

const calcularMedia2 = arr => {
    const numeroElementos = arr.length
    let soma = 0

    for (numero of arr) {
        soma += numero
    }

    return soma / numeroElementos
}

console.log(calcularMedia2([10,20]))

// const calcularMedia3 = arr => {
//     return arr.reduce((acum, elem, index) => (acum + elem) /index)
// }

// console.log(calcularMedia3([2,4,6,8]))