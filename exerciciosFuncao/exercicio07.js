function baskara (a, b, c) {
    let raizes = []
    let delta = (b ** 2) - (4 * a * c)
    if (delta < 0) {
        return 'Delta negativo'
    } 
    let x1 = (- b + Math.sqrt(delta)) / (2 * a)
    let x2 = (- b - Math.sqrt(delta)) / (2 * a)
    raizes.push(x1)
    raizes.push(x2)
    return raizes
}

console.log(baskara(1,3,2));
console.log(baskara(3,1,5));
console.log(baskara(2,10,5));

 //   console.log(`As raizes sao ${raizes[0]} e ${raizes[1]}`);


