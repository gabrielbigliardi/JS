function valoresMaioresEMenores(vetor) {
    let valorMaior = vetor[0]
    let valorMenor = vetor[0]
    for(let i = 1; i < vetor.length; i++) {
        if(vetor[i] > valorMaior) {
            valorMaior = vetor[i]
        }
        if(vetor[i] < valorMenor) {
            valorMenor = vetor[i]
        }
    }
    return `maior valor: ${valorMaior}. menor valor: ${valorMenor}`
}


const vetorTeste = [2, 4, 5, 1, 121, 19, 22, 98, 330, 3, 14, 42, 10]
console.log(valoresMaioresEMenores(vetorTeste));