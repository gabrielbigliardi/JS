let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

console.log("----------");
isAtivo = 1
console.log(isAtivo);
console.log(!isAtivo);
console.log(!!isAtivo);
console.log(!!true);

console.log("----------");
console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!! ' ');
console.log(!! 'texto');
console.log(!! []);
console.log(!! {});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("----------");
console.log('os falsos...');
console.log(!!0);
console.log(!!''); //  string vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("----------");
console.log('pra finalizar...');   // retorna esse resultado pois é uma operação logica, !! -> é uma operação logica
console.log(!!('' || null || 0 || ' ')); 
//pelo menos 1 é verdadeiro, o ' ', por tanto retornará verdadeiro
console.log('' || null || 0 || 'epa'); //  retorna apenas o primeiro verdadeiro, no caso o epa

let nome = ''
console.log(nome || 'Desconhecido'); // retorna desconhecido pois o nome é false