// Object.preventExtensions -> nao deixa adicionar novos atributos nesse objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto));

produto.nome= 'Borracha' // permite alteração de atributo
produto.descricao = 'Borracha escolar branca' // nao permite adicionar
delete produto.tag // permite excluir atributos
console.log(produto);

// Object.seal -> não consegue aicionar nem excluir atributos, porem consegue modificar valores já existentes
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa);

// Object.freeze = seria um objeto selado só que com valores constantes, não modificaveis
