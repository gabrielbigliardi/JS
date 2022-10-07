function MeuObjeto() {
    console.log(MeuObjeto.prototype);
}
console.log("--------------------");
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log("--------------------");
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj2.__proto__);
console.log("--------------------");

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //referencia de __proto__ do obj3 criado na linha 22. de Object.prototype para MeuObjeto.prototype 
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a LOUCURA! \/
console.log((new MeuObjeto). __proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);