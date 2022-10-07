function somenteParesEIndexPar(array) {
    let resultado = []
    for (let i in array) {
        if ((array[i] % 2 == 0) && (i % 2 == 0)) {
            resultado.push(array[i])
        }        
    }
    return resultado
}

console.log(somenteParesEIndexPar([1, 2, 3, 4]))
console.log(somenteParesEIndexPar([10, 70, 22, 43]))


function somenteParesEIndexPar2(array) {
    return array.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0 
    const indicePar = indice % 2 === 0

    return numeroPar && indicePar
    })
}

console.log(somenteParesEIndexPar2([1, 2, 3, 4]))
console.log(somenteParesEIndexPar2([10, 70, 22, 43]))

//array.filter(item => item % 2 == 0 && item[i] % 2 == 0).resultado.push(item)
