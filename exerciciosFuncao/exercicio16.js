function calculadora(num1, operacao, num2) {
    switch (operacao) {
        case '+': console.log(num1 + num2); break;
        case '-': console.log(num1 - num2); break
        case '*': console.log(num1 * num2); break
        case '/': console.log(num1 / num2); break
        default: console.log('operacao invalida'); break;
    }
}

calculadora(2, '+', 2)
calculadora(2, '-', 22)
calculadora(2, '*', 4)
calculadora(22, '/', 2)