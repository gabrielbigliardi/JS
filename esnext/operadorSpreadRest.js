// rest (juntar) / spread (espalhar)
// usar rest como parametro de uma função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone);

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = [ 'Maria', 'Rafaela', ...grupoA, 'Tadeu']
console.log(grupoFinal);