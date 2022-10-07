function mediaAritmetica(vetor){
    let soma = 0
    let cont = 0
    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
        cont++
    }
    let mediaArit = soma / cont
    return `A media aritmetica do vetor é ${mediaArit}`
} 

const vetorTeste = [2, 4, -5, 1, -121, -19, 22, 98, -330, -3, 14, -42, -10]
const vetorTeste2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mediaAritmetica(vetorTeste))
console.log(mediaAritmetica(vetorTeste2))