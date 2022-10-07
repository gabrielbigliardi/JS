console.log(soma(3, 4));
console.log(sub(3, 4));

// function declaration, funciona mesmo se a função for declarada em baixo
function soma(x, y) {
    return x + y
}

// function expression, nao funciona caso haja coisa acima, apenas a baixo da atribuição da funcao
const sub = function (x, y) {
    return x - y
}

// named function expression, mesmo caso da funcion expression

const mult = function mult(x, y) {
    return x * y
}