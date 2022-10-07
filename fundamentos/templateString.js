const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá 
        ${nome}!`

console.log(concatenacao, template);

// expressoes
console.log(`1 + 1 = ${2 + 2}`); // ira interpretar o q esta entre chaves apos o dola

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);