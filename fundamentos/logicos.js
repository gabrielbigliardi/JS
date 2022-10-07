function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //mas a diferença simula um ou exclusivo, xor
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    //js é possivel apenas um retorno, no entanto pode-se retornar um objeto com mais variaveis
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));