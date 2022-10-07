let comparacomThis = function (param) {
    console.log(this === param);
}

comparacomThis(global)

const obj = {}
comparacomThis = comparacomThis.bind(obj) //aq o this nao aponta mais para o escopo global
comparacomThis(global)                   //e sim para o escopo do objeto obj
comparacomThis(obj)

console.log("-------------");
let comparacomThisArrow = param => console.log(this === param);
comparacomThisArrow(global)
comparacomThisArrow(module.exports)

console.log("-------------");
comparacomThisArrow = comparacomThisArrow.bind(obj)
comparacomThisArrow(obj)
comparacomThisArrow(module.exports)