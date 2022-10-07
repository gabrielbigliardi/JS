// console.log( Math.max(10, 50, 100, 30))

// const y = 9
// let arr = new Array(5).fill(y)
// console.log(arr)

// console.log("--------------------");

// console.log(typeof(2))
// console.log("--------------------");

// const ar = {a:1,b:2}

// let copia = Object.assign({c:3}, ar)
// console.log(copia);

let array = [1, 2, 4, 6, 10]
let objeto = {a:1, b:2, c:4, d:6, e:10}

console.log('for...of Array')
for (let i of array){
    console.log(i)
}
console.log('for...in Array')
for (let i in array) {
    console.log(i)
}
console.log('-------------------');
// console.log('for...of Objeto')
// for (let i of objeto){
//     console.log(i)
// }
console.log('for...in Objeto')
for (let i in objeto) {
    console.log(i)
}