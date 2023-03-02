function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
  
console.log(add(2, 3));

console.log(add(2, 3, 5));




const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;

console.log(sub(2, 3));

console.log(sub(2, 3, 5));




const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};



function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, 5, 6, 7, 8, 9, 10));


// generic function 

function getItems<T> (items: T[]): T[] {
    return new Array<T>().concat(items)
}

let itemsResult = getItems<number>([1, 2, 3, 4, 5])
let itemsConcat = getItems<string>(['a', 'b', 'c', 'd', 'e'])

console.log(itemsResult);
console.log(itemsConcat);
