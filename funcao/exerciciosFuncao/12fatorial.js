function fatorial(num) {
    let res = num
    while (num > 1) {
        num--
        res = res * num 
        // console.log(res);
    }
    return res
}

function fatorial2(num) {
    return (num * fatorial2(num - 1))
}

console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));
console.log(fatorial(6));
// console.log(fatorial(3));