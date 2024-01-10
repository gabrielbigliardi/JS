function digitalRoot(n) {
    let stringN = n.toString()

    if (stringN.length === 1) {
        return parseInt(stringN, 10)
    }

    let soma = 0

    for (let i = 0; i < stringN.length; i++) {

        soma = soma + parseInt(stringN[i], 10)
    }

    return digitalRoot(soma)


}

function digitalRoot2(n) {

    return (n - 1) % 9 + 1;
}

// console.log(digitalRoot(8))
// console.log(digitalRoot(16))
// console.log(digitalRoot(942))

console.log(digitalRoot2(8))
console.log(digitalRoot2(16))
console.log(digitalRoot2(942))
