function funcionarOuNao(valor, chanceErr) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErr) {
            reject('ocorreu um erro')    
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Deu certo', 0.5)
    .then(v => `Valor: ${v}`)
    .then(console.log)
    .catch(e => console.log(`Erro: ${e}`))
    .then(() => console.log('Fim'))