function paresEImpares(vetorNumeros) {
    let pares = []
    let numeroPares = 0
    let impares = []
    let numeroImpares = 0

    for(let i = 0 ; i < vetorNumeros.length ; i++) {
        if(vetorNumeros[i] % 2 == 0) {
            pares.push(vetorNumeros[i])
            numeroPares++
        } else {
            impares.push(vetorNumeros[i])
            numeroImpares++
        }
    }

    console.log(`quantidade de pares: ${numeroPares}. quantidade de impares: ${numeroImpares}.`)
    
}

const vetor = [2, 4, 5, 11, 19, 22, 28, 33, 35, 41, 42]
paresEImpares(vetor)
