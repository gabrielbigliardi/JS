console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('dentro de uma funcao');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global)

    this.perigo = '...' // tomar cuidado pq nesse cenario this aponta para global
}
logThis() // dentro de uma funcao o this nao aponta para exports, mas fora de uma funcao sim.
// this dentro de uma funcao aponta para global
