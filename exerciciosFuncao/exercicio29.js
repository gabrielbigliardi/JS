function entre10e20(vetor) {
    let entreIntervalo = []
    let qntdEntreIntervalo = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            entreIntervalo.push(" " + vetor[i])
            qntdEntreIntervalo++
        }
    }
    return `qntde entre o intervalo: ${qntdEntreIntervalo}. itens entre o intervalo:${entreIntervalo}.`
}


const vetor = [2, 4, 5, 11, 19, 22, 28, 33, 35, 41, 42]
console.log(entre10e20(vetor))