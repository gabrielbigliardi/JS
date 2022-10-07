const escola = "Cod3r"
 
console.log(escola.charAt(4)); // começa no 0
console.log(escola.charAt(5)); //  retorna nulo
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('d'));

console.log(escola.substring(1)); // a partir do indice 1
console.log(escola.substring(0, 3)); // do 0 ao 3, sem o 3

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(',')); // converte a string em array