"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
// generic function 
function getItems(items) {
    return new Array().concat(items);
}
let itemsResult = getItems([1, 2, 3, 4, 5]);
let itemsConcat = getItems(['a', 'b', 'c', 'd', 'e']);
console.log(itemsResult);
console.log(itemsConcat);
