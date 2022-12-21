function paresEImpares(arr) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares++
        } else if (arr[i] % 2 !== 0) {
            impares++
            console.log(arr[i]);
        } 
    }

    return `Pares: ${pares}. Impares: ${impares}.`
}

console.log(paresEImpares([1, 0, 13, 4, 8, 201, 0, 58]))