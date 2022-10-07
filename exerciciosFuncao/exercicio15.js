function comprarCarro (carro) {
    switch (carro) {
        case 'hatch': console.log('compra efetuada'); break
        case 'sedan': console.log('tem certeza?'); break
        case 'caminhonete': console.log('tem certeza?'); break
        case 'moto': console.log('tem certeza?'); break
        default: console.log('carro nao disponivel'); break
    }
}

comprarCarro('hatch')
comprarCarro('moto')
comprarCarro('sedan')
comprarCarro('caminhonete')
comprarCarro('bicicleta')