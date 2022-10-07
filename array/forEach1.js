const aprovados = ['Jumba', 'Rora', 'Bela', 'Jimi']

aprovados.forEach(function(feijao, arroz) {
    console.log(`${arroz + 1}) ${feijao}`);
})
console.log("-----------");

aprovados.forEach(nome => console.log(nome))
console.log("-----------");

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)