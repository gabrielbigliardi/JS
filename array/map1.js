// map serve para mapear os elementos de um array para outro
// os numero de elementos do array criado é o mesmo do array origem

const nums = [1, 2, 3, 4, 5]

// Map é um for com propósito 
let resultado = nums.map(function (elementoAtual) {
    return elementoAtual * 20 
})
console.log(resultado, nums);
console.log('------------------------------------------');

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);
