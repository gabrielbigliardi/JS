const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // cria obj novo tento como prototipo o obj pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, { nome: { value: 'Bia', writable: false, enumerable: true} })
//writable -> indica se o valor podera ser mudado, como está false, o value nao poderá ser mudado
//enumerable -> indica se o valor podera ser listado, como nos casos da função object.keys() ou percorrendo com for in 
        
console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2)); // caso enumerable fosse false, nao apreceria aqui
console.log(Object.keys(pai));
console.log("-------------------------");

for(let key in filha2) {
    //console.log(key);
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}

console.log("-------------------------");
for(let i in filha2) {
    console.log(i);
}
