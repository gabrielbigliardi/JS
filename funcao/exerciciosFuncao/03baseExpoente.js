const expo = (bas, exp) => {

    let res = bas

    for(let i = 0; i < exp - 1; i++) {
        res = res * bas
    }

    return res
}

const expo2 = (bas, exp) => Math.pow(bas, exp) 


console.log(expo(2,2));
console.log(expo(2,3));
console.log(expo2(3,3));
console.log(expo2(5,2));

