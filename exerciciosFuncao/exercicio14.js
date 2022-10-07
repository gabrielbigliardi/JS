const frutas = fruta => {
    switch(fruta) {
        case 'Maça': case 'Maca':
        case 'maca': case 'maça': console.log('não vendemos essa fruta');
            break
        case 'Kiwi': case 'kiwi': console.log('escassez de kiwi');
            break
        case 'Melancia': case 'melancia': console.log('Aqui está, 3 reais o quilo');
            break
        default: console.log('erro na fruta'); break
    }
}

frutas('maca')
frutas('kiwi')
frutas('Melancia')
frutas('banana')