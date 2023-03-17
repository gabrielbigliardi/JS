const objeto1 = [{nome: 'computador', categoria: 'eletronico', preco: 5900.00 },
                {nome: 'microondas', categoria: 'eletrodomestico', preco: 699.00},
                {nome: 'vaso de plantas', categoria: 'decoracao', preco: 64.50}]

function despesasTotais(obj) {
    
    let despesas = 0
    for (let i of obj) {
        despesas += i.preco
    }
    return despesas
}

console.log(despesasTotais(objeto1))


function despesasTotais2(obj) {
    return obj.reduce((acumu, elem) => acumu += elem.preco, 0)
}

console.log(despesasTotais2(objeto1))


function despesasTotais3(obj) {
    return obj.map(p => p.preco)
        .reduce((acumu, elem) => acumu += elem, 0)
}

console.log(despesasTotais3(objeto1))