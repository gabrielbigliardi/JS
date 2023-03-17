function triangulos(x, y, z) {

    if ((x == y) &&(x == z)) {
        return 'equilatero'
    } else if ((x == y && x != z) || (x == z && x != y) || (y == z && y != x)) {
        return 'isosceles'
    } else {
        return 'escaleno'
    }
}

console.log(triangulos(1,1,1));

console.log(triangulos(1,1,2));
console.log(triangulos(1,2,1));
console.log(triangulos(2,1,1));

console.log(triangulos(1,2,3));
console.log(triangulos(3,2,1));
console.log(triangulos(1,2,1));
console.log(triangulos(1,2,1));
console.log(triangulos(1,2,1));