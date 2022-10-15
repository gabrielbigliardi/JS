function inverso(valor) {
    const tipo = typeof valor

    if (tipo == "boolean") return !valor
    else if ( tipo == 'number') return -valor
    else return `boolean ou number esperados, voce inseriu ${tipo}`


}

console.log(inverso(false))
console.log(inverso('teste'))
console.log(inverso(2000))
console.log(inverso('2000'))