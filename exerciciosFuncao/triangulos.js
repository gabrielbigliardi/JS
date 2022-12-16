function triangulos(x, y, z) {

    if ((x === y) &&(x === z)) {
        return 'equilatero'
    } else if ((x === y) || (x === z)) {
        return 'isosceles'
    } else {
        return 'escaleno'
    }
}

console.log(triangulos(1,2,1));