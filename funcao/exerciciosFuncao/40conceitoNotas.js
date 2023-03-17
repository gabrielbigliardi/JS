let notas = [0.1, 4.4, 5.6, 6.8, 7, 8.5, 9.1, 10]

function conceitosDasNotas(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] <= 4.9) {
            arr[i] = `${arr[i]} conc: D`
        } else if (arr[i] <= 6.9) {
            arr[i] = `${arr[i]} conc: C`
        } else if (arr[i] <= 8.9) {
            arr[i] = `${arr[i]} conc: B`
        } else if (arr[i] <= 10) {
            arr[i] = `${arr[i]} conc: A`
        }
    }
    return arr
}

console.log(conceitosDasNotas(notas))