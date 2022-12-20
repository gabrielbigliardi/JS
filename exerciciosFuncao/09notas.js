function notas(nota) {
    if(nota < 38) {
        return  'Reprovado. Nota inferior a 40 pontos'
    } else {
        if ((nota % 5) < 3) {
            return `Aprovado. Nota ${nota}`
        } else {
            if(nota % 5 === 3) {
                let notaFinal = nota + 2
                return `Aprovado. Nota ${notaFinal}`
            } else if ((nota % 5) === 4) {
                let notaFinal = nota + 1
                return `Aprovado. Nota ${notaFinal}`
            }
        }
    }
}

console.log(notas(29));
console.log(notas(38));
console.log(notas(56));
console.log(notas(69));
console.log(notas(78));
console.log(notas(80));
console.log(notas(95));
console.log(notas(71));
