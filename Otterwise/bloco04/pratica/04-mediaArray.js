function mediaArray(arr) {
    // const divisor = arr.length
    const media = arr.reduce((acum, elem) => (acum + elem))
    return media / arr.length
}

// const testeLength = [1,2,3]
// const tamanhoLength = testeLength.length
// console.log(tamanhoLength)

console.log(mediaArray([6, 7, 8]))
console.log(mediaArray([1, 2, 3]))