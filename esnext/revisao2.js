// Arrow Function 
const soma = (a, b) => a + b // qnd n se tem o corpo da function, implicitamente o return é chamado
console.log(soma(2, 3)); /* sempre é uma funcao anonima, cria-se a function e atribui-se ela a uma variável ou uma constante, 
e a partir da variavel ou constante atribuida vc consegue invocar ela*/

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log (texto = 'Node') {
    console.log(texto)
}
log()
log(undefined)
log('Sou mais forte')

// Operador Rest
function total (...numeros) {   // junta todos atributos passados em uma estrutura
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,3,5,20,2))