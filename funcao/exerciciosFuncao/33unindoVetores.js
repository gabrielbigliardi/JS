let vetorInteiro = [3, 4, 5, 6]
let vetorString = ['3', '4', '5', '6']
let vetorDouble = [3.3, 4.4, 5.5, 6.6]

function somaVetores(arr1, arr2, arr3) {
    return arr1.concat(arr2).concat(arr3)
}

console.log(somaVetores(vetorInteiro, vetorString, vetorDouble))