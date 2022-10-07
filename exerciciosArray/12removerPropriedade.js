const obj1 = {nome: 'Cascao', idade: 23, altura: 1.73}
const obj2 = {nome: 'Cebolinha', idade: 25, altura: 1.69}
const obj3 = {nome: 'Magali', idade: 24, altura: 1.65}
const obj4 = {nome: 'Monica', idade: 23, altura: 1.71}

function removerPropriedade(objeto, deletado) {
    const copia = {...objeto}
    delete copia[deletado]

    return copia
}

removerPropriedade(obj2, "idade")

console.log(obj2)

/*
const removerPropriedade = (objeto,deletado) => {
    const copia = Object.assign({}, objeto)
    delete copia[deletado]
    return copia
}
*/
