function funcaoDaSorte(numero) {
    const max = 10
    const min = 1
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);

    return (numero === numeroSorteado)? 
        `Parabéns, o numero ${numero} foi sorteado` :
        `que pena, o numero sorteado foi ${numeroSorteado}`
}

console.log(funcaoDaSorte(2))