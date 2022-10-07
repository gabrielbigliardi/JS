const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! hehe -> remove o ultimo elemento do array
console.log(pilotos);

pilotos.shift() // pop() tira da ultima posição, enquanto shift() tira da primeira posição
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.unshift('Hamilton') // no push acrescenta na ultima posição, o unshift acrescenta na primeira posição [0]
console.log(pilotos);

console.log("------------------------------------------------------");
//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3, 1) // massa quebrou novamente
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)  //gera novo array, nesse caso apartir do indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // sendo que o ultimo elemento não entra
console.log(algunsPilotos2);