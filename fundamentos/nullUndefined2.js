let valor //nao inicializada

console.log(valor);
valor = null //
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco); //pq null eh false
console.log(produto);