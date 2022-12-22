const obj1 = { a: 1, b: 2}

const obj2 = [ [3, "tres"], [4, "quatro"]]

const obj3 = {'a': 1, "banana": 99}

const obj1Entries = Object.entries(obj1)

const obj2FromEntries = Object.fromEntries(obj2)

console.log(obj1Entries);
console.log(obj2FromEntries);

const chaves = Object.keys(obj3)
const valores = Object.values(obj1)

console.log(valores, chaves);