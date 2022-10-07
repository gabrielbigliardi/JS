const verifBissexto = (ano) => {
    if (ano % 4 == 0) {
        console.log('Ano Bissexto')
    } else {
        console.log('Ano não Bissexto')
    }
}

verifBissexto(2024)
verifBissexto(1)
verifBissexto(4)
verifBissexto(400)
verifBissexto(1987)