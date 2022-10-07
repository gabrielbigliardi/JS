/* Função como receita de bolo, recebe alguns ingredientes de entrada, 
que sao os dados que vai receber. Dentro da função, faz-se todo passo a passo,
que é a receita, os verbos (colocar, mexer, esperar...). 
E no final retorna o resultado, ou seja, o bolo feito.
A função é um bloco de código, que recebe um nome,
para que possa se chamar esse bloco quantas vezes quiser.
Recebe parametros de entrada (ingredientes), 
executa-se esse algoritimo (passo a passo) de todas senteças de código, e retorna um valor.*/

//Função sem retorno
function imprimirSoma(a, b) { //parametros a e b
    console.log(a + b);
}

imprimirSoma (2, 3)
imprimirSoma (2)
imprimirSoma (2, 10, 3, 4, 5, 6, 7)
imprimirSoma ()

console.log("--------");
//Função com retorno
function soma(a, b = 0) {
    return a + b    
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());