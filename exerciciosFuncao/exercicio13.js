const diaUtil = dia => {
    switch (dia) {
        case 1: console.log('Domingo, dia não útil');
            break;
        case 2: console.log('Segunda, dia útil');
            break;
        case 3: console.log('Terça, dia útil');
            break;
        case 4: console.log('Quarta, dia útil');
            break;
        case 5: console.log('Quinta, dia útil');
            break;
        case 6: console.log('Sexta, dia útil');
            break;
        case 7: console.log('Sabado, dia não útil');
            break;
        default: console.log('dia invalido');
            break;
    }
}

diaUtil(4)
diaUtil(1)
diaUtil(5)
diaUtil(7)
diaUtil(2)
diaUtil(6)
diaUtil(9)
diaUtil(100)