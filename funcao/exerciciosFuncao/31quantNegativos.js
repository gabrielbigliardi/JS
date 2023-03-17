function contagemNegativos(arr) {
    let qntNegativos = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            qntNegativos++
        }
    }

    return qntNegativos + ' numeros negativos.'
}

function contagemNegativos2(arr) {
    let qntNegativos = 0
    let qntDeNumeros = 0
    arr.reduce((prev, current) => {
        qntDeNumeros++
        if (current < 0) {
            qntNegativos++
        }
    }, qntNegativos)
    return `${qntNegativos} numeros negativos. ${qntDeNumeros++} numeros ao total.`
}

console.log(contagemNegativos([2, -2, 0, -3, 5, -8, -1]));
console.log(contagemNegativos2([2, -2, 0, -3, 5, -8, -1]));