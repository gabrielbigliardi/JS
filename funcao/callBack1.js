const fabricantes = ["Mercedes", "Audi", "BMW", "Ford"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)
console.log('----------------');

fabricantes.forEach(function(a) {
    console.log(a);
})
console.log('----------------');

fabricantes.forEach (fabricante => console.log(fabricante))