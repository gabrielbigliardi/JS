const estaEntre = (numero, minimo, maximo, inclusivo) => {
    if (minimo > maximo) {
        [minimo, maximo] = [minimo, maximo]
    }

    let entre = false
    let tipoInclusao = typeof inclusivo

    if (tipoInclusao == 'false' || tipoInclusao == 'undefined') {
        if (numero > minimo && numero < maximo) {
            entre = true
            return entre
        } else {
            entre = false
            return entre
        }
    } else {
        if (numero >= minimo && numero <= maximo) {
            entre = true
            return entre
        } else {
            entre = false
            return entre
        }
    }
}

console.log(estaEntre(60, 50, 100))
console.log(estaEntre(16, 50, 100))
console.log(estaEntre(50, 50, 100))
console.log(estaEntre(50, 50, 100, true))
