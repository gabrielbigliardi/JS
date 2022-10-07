function notaFinal(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${nota}`)
    }
}


function arredondar(nota) {
    if ((nota % 5) > 2) {
        return nota + (5-(nota % 5))
    } else {
        return nota
    }
}

notaFinal(29)
notaFinal(37)
notaFinal(38)
notaFinal(55)
notaFinal(78)