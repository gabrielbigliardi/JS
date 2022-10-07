const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = { a, b, c }
console.log(obj1, obj2);

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);

const obj5 = {
    funcao1: function () {
        //...
    },
    funcao2() {
        //...    forma mais curta de definir a funcao dentro do obj
    }
}
console.log(obj5);

const obj6 = {
    funcao11: function () {
        x = 2 * 2
        return 2 * 3
    },
    funcao22() {
        return "retorno da funcao 02"
        //...    forma mais curta de definir a funcao dentro do obj
    }
}
console.log(obj6);