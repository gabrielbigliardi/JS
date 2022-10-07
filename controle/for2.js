const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (j in notas) {
    console.log(j, notas[j]);
}

const pessoa = { 
    nome: 'Jumba',
    sobrenome: "Lina",
    idade: 22,
    cachorra: 'Aurora'
}

for ( let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`);
}
console.log(i);