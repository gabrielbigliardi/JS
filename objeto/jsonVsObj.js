/*JSON -> formato textual, simples de ser lido e interpretado, 
servindo pra comunicar sistemas feitos em tecnologias diferentes,
consegundo ler JSON em JAVA, C#, Python...*/

const obj = { a: 1, b: 2, c: 3, soma() { return a+b+c}}
console.log(JSON.stringify(obj));

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"));        //formato invalido
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"));  //formato invalido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // objeto criado a partir de um texto, texto respeitando formato JSON

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'));