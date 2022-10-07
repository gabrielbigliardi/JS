function progrAritmetica (n, a1, r) {
    let termosResultantes = [ ]
    termosResultantes.push(a1)
    let contador = 0
    let numAtual = a1
    while (contador < n) {
        numAtual += r
        termosResultantes.push(numAtual)
        contador++
    }

    let soma = a1
    
    for (let i = 1; i < termosResultantes.length; i++) {
        soma += termosResultantes[i]
        
    }

    console.log(`Vetor resultante: ${termosResultantes}`);
    console.log(`Soma dos elementos: ${soma}`);
}

progrAritmetica(5, 2, 3)