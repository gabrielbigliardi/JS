const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function adicionandoArrays (arr1, arr2) {
    for(let i = 0; i < arr2.length; i++) {
        vetorPilha.push(arr2[i])
    }
    return vetorPilha
}

console.log(adicionandoArrays(vetorPilha, vetorAdiciona))