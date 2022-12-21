function maiorEMenor(arr) {
    let maior = arr.reduce((prev, atual) => prev > atual ? prev : atual)
    let menor = arr.reduce((prev, atual) => prev > atual ? atual : prev)

    return `Maior: ${maior}. Menor: ${menor}.`
}

console.log(maiorEMenor([2, 1, 10, 3, 50, 20, 7]))