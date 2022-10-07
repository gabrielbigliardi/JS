const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Ross',
        nota: 9.7
    }, {
        nome: 'Chandler',
        nota: 8.2
    }, {
        nome: 'Joey', 
        nota: 5.6
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rachel',
        nota: 6.5
    }, {
        nome: 'Phoebe',
        nota: 7.3
    }, {
        nome: 'Monica',
        nota: 8.2
    }]
}]

const getNotaAluno = a => a.nota
const getNotasTurma = t => t.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);

