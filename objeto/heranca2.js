 // cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 'Z' // nao faça isso !

const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'} // esse attr3 sombreou o attr3 do obj pai

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
console.log("-----------------------");

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)  // define a relação de prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);

console.log("-----------------------");
volvo.acelerarMais(100)
console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status());