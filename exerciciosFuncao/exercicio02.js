const classTriang = (x, y, z) => {
    if (x == y && x == z) {
        console.log("Equilátero");
    } else if ((x == y && y != z) || (x == z && z != y) || (y == z && z != x)) {
        console.log("Isósceles");
    } else {
        console.log("Escaleno");
    }
}

classTriang(3, 3, 3)
classTriang(3, 3, 4)
classTriang(4, 3, 3)
classTriang(3, 4, 3)
classTriang(3, 4, 5)
classTriang(1, 4, 5)
