console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

console.log("----------------------------");
aprovados[3] = 'Paulo' // assim mais comum para substituir elemento q ja existe
aprovados.push('Jumba') // mais apropriado para adicionar novo elemento ao array
console.log(aprovados.length);
console.log(aprovados);
aprovados[9] = 'Rafael'
console.log(aprovados.length); /* os elementos que nao foram atribuidos valores vao ficar como undefined,
mas ainda assim vao contar como elementos, por isso a length resulta em 10*/
console.log(aprovados[8] === undefined);

console.log("----------------------------");
console.log(aprovados);
aprovados.sort() // metodo sort altera a ordem do array
console.log(aprovados);

console.log("----------------------------");
delete aprovados[1] // torna o indice 1 undefined
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') /*o primeiro numero indica de onde começa, 
o segundo quantos delete, por fim, os ultimos adicionam. EXCLUI E DPS ADICIONA.*/
console.log(aprovados);
