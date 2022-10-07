// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma (2, 3)


// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
 console.log(soma(3, 4));


 //funçao arrow com retorn implicito
 const subtracao = (a, b) => a - b
 console.log(subtracao(5,6));


 //funcao arrow com um unico parametro
 const imprimir2 = a => console.log(a)
 imprimir2('Legal!!')