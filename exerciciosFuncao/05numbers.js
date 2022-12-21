function correctNumber(num) {
    let fixedStr = num.toFixed(2).toString()
    return `R$ ${fixedStr}`
}

console.log(correctNumber(0.300000004));
console.log(correctNumber(2.5493));
console.log(correctNumber(10.1));
console.log(correctNumber(5.222222));
