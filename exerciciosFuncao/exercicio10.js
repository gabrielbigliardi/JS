function verifDivisaoPor3 (num) {
    if (num % 3 == 0) {
        return true
    } else { 
        return false
    }
}

const verifDiv3 = num => num % 3 == 0

console.log(verifDiv3(6));
console.log(verifDiv3(7));