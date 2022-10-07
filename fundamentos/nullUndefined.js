const a = {name: 'Teste'}

console.log(a);

const b = a //atribuição por referencia

console.log(b);
b.name = 'Opa'

console.log(b);
console.log(a);

let c = 3
let d = c
d++
console.log(c);
console.log(d);