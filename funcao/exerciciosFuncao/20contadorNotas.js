function contadorDeNotas(valorSaque) {
    let contador50 = 0
    let contador10 = 0
    let contador1 = 0
    let valorNota = subtraindoNotas(valorSaque)
    while(valorSaque >= valorNota) {
        switch (valorNota) {
            case 50:
                valorSaque -= 50
                contador50++
                break;
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 1:
                valorSaque -= 1
                contador1++
        }

        valorNota = subtraindoNotas(valorSaque)

    }

    return elaborarResultado(contador50, contador10, contador1)

}

function subtraindoNotas(num) {
    if(num >= 50){
        return 50
    } else if(num >= 10) {
        return 10
    } else if(num >= 1) {
        return 1
    }
}

function elaborarResultado(cont50, cont10, cont1) {
    let resultado = {notasDe50: 0, notasDe10: 0, notasDe1: 0}

    if (cont50 > 0) {
        resultado.notasDe50 = cont50 
    }
    if (cont10 > 0) {
        resultado.notasDe10 = cont10
    }
    if (cont1 > 0) {
        resultado.notasDe1 = cont1
    }

    return resultado
}

console.log(contadorDeNotas(105))
console.log(contadorDeNotas(43))
console.log(contadorDeNotas(52))
console.log(contadorDeNotas(227))