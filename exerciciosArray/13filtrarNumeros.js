function filtrarNumeros([...args]){
    let numeros = []
    for(let i = 0; i < args.length; i++) {
        let tipo = typeof args[i] 
        if(tipo === 'number'){
            numeros.push(args[i])
        }
    }
    return numeros
}

console.log(filtrarNumeros(["js", 1, "3", 'web', 20]))

const filtrarNumeros2 = (array) => {
    let numeros = []
    for (let item of array) 
        if (typeof item === 'number') 
            numeros.push(item) 
    return numeros
}

console.log(filtrarNumeros2([1, "tres", 77, "um"]));


function filtrarNumeros3(array) {
    return array.filter(item => typeof item === 'number')
}

console.log(filtrarNumeros3(['teclado', 99, 'mouse']))