const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

console.log("---------Utilizando Destructuring---------");

//utilizando destructuring, desestruturando elementos do array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
}) 

console.log("---------Ou---------");

/*OU:*/
Object.entries(pessoa).forEach(jumba => {
    console.log(`${jumba[0]}: ${jumba[1]}`);
})

console.log("-------------------");

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //passivel a ser listada, no keys() por exemplo
    writable: false, // passivel a ser alterada
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '01/01/2017' // n será alterada por causa do writable false
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

console.log("-------------------");

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }            //o objeto de destino vai receber
const o1 = { b: 2 }             // todos os atributos que vierem dps dele
const o2 = { c: 3, a: 4}        //  \/
const obj = Object.assign(dest, o1, o2) /* o valor de a do obj o2, 
                               vai substituir o valor de a do objeto dest*/

Object.freeze(obj)
obj.c = 1234
console.log(obj);
