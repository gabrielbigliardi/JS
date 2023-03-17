let vet1 = [1,2,3,4,5]
let vet2 = [6,7,8,9,10]

function trocandoVetores (arr1, arr2) {
    let arrAux = arr1.map(elem => elem)
    arr1 = arr2.map(elem => elem)
    arr2 = arrAux.map(elem => elem)

    return `${arr1} e ${arr2}`
}

console.log(trocandoVetores(vet1, vet2))