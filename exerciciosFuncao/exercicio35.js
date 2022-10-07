let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

/*console.log(vetorPilha.push(vetorAdiciona));
*console.log(vetorPilha);
*Array.prototype.push.apply(vetorPilha, vetorAdiciona)
console.log(vetorPilha)*/

function adcArray(vetorInicial, vetorAdicional) {
    for (let i = 0; i < vetorAdicional.length; i++) {
        vetorInicial.push(vetorAdicional[i])
    }   
    console.log(vetorInicial)
}

adcArray(vetorPilha, vetorAdiciona)