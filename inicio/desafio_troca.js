let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7

console.log(a);
console.log(b);

a = 94;
b = 7;

console.log(a);
console.log(b);

// outra forma de trocar o valor das variaveis seria criar uma variavel temporaria

let c = 8;
let d = 95;

let temp = c;  // variavel temporaria
c = d
d = temp

console.log(c);
console.log(d);
