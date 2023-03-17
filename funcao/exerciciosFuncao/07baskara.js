function baskara(a, b, c){
    let delta = Math.pow(b, 2) + (- 4 * (a * c))
    let raizPos = (-b + Math.sqrt(delta)) / (2 * a)
    let raizNeg = (-b - Math.sqrt(delta)) / (2 * a)

    if ( delta < 0 ){
        return 'Delta negativo'
    } else {
        let vet = []
        vet.push(raizPos)
        vet.push(raizNeg)
        return vet
    }
}

console.log(baskara(-2, 13, -5));