const aluno = (codigo, nota1, nota2, nota3) => {
    const notas = []
    notas[0] = nota1
    notas[1] = nota2
    notas[2] = nota3
    const notaFinal = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10
    const aprovacao = notaFinal < 5 ? 'Reprovado' : 'Aprovado'


    return `codigo do aluno: ${codigo}. notas: ${notas[0]}, ${notas[1]} e ${notas[2]}. nota final: ${notaFinal}. ${aprovacao}`
}

console.log(aluno(1234, 3.9, 6.2, 5.2))