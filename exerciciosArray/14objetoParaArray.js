const obj1 = {a:1, b:2, c:3}


function objetoParaArray(objeto){
    return Object.entries(objeto) }

console.log(objetoParaArray(obj1))



function objetoParaArray2(objeto) {
    const arr = []

    for(let chave in objeto) 
        arr.push([chave, objeto[chave]])
    
    return arr
}

console.log(objetoParaArray2(obj1))

function objetoParaArray3(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])

    return resultado
}

console.log(objetoParaArray3(obj1))