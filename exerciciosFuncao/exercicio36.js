function multipParam(vetorEnt, multiplicador) {
    const resultado = [ ]
    for (let i = 0; i < vetorEnt.length; i++) {
        resultado.push(vetorEnt[i] * multiplicador)
    }
    console.log(resultado)
}

multipParam([1,3,4,5,6,7], 2)

console.log('----------------------');

let vetor = [1,3,5,7,8]

function multipParam5(vetorEnt, multiplicador) {
    let resultado = []
    vetorEnt.forEach(element => {
        if (element > 5) {
            resultado.push(element * multiplicador)
        }
    });
    console.log(resultado)
}


multipParam5([1,3,4,5,6,7], 2)