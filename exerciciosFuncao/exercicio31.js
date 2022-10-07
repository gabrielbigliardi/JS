function negativos(vetor){
    let qntdNegativos = 0
    let negativos = []

    for ( let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos.push(vetor[i])
            qntdNegativos++
        }
    } 
    return `qntdade de negativos: ${qntdNegativos}. itens negativos:${negativos}.`
}

const vetorTeste = [2, 4, -5, 1, -121, -19, 22, 98, -330, -3, 14, -42, -10]
console.log(negativos(vetorTeste))