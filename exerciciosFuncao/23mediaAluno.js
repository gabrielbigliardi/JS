function mediaAluno(cod, nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 4 + 3 + 3
    
    if (media >= 5) {
        return `Aluno ${cod}: nota 1 = ${nota1}, nota 2 = ${nota2} e nota 3 = ${nota3}. Media Final: ${media}. Aprovado.`
    }else {
        return `Aluno ${cod}: nota 1 = ${nota1}, nota 2 = ${nota2} e nota 3 = ${nota3}. Media Final: ${media}. Reprovado.`
    }
}

console.log(mediaAluno(01, 3, 5, 2.2))