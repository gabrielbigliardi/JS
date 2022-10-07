const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3])
console.log(valores[4]);//o indice 4 nao existe->undefined

valores [4]= 10
console.log(valores)
console.log(valores.length)//qntos elemdentos tem no array

valores.push({id:3}, false, null, 'teste') //push adiciona elementos no array
console.log(valores)

console.log("---------");
console.log(valores.pop()); //tirar item do array
delete valores [0]; //deleta atributo do objeto
console.log(valores);

console.log(typeof valores); 