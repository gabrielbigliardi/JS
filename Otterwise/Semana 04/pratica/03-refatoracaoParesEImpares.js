function paresEImpares(arr) {
    const arrPares = []
    const arrImpares = []
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrPares.push(arr[i])
        } else {
            arrImpares.push(arr[i])
        }
    }
    return 'pares: ' + arrPares + ". impares: " + arrImpares
}

console.log(paresEImpares([1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]))

// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127].map(i => )

const arrWithFilter = arr => {
    const res = arr.filter(elem => elem > 0)
    return res
}

console.log(arrWithFilter([1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]))