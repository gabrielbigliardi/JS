// atividade feita no notebook
const saudacao = 'Opa' //contexto lexico 1

function exec() {
    const saudacao = 'Fala' //contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 20,
    peso: 80,
    endereco: {
        logradouro: 'rua tal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);