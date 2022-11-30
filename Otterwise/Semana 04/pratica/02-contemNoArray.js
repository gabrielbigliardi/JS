function testeContemArray(arr, num) {
    // const contem = false;
    return arr.includes(num) ? true : false
    // return contem
}

console.log(testeContemArray([1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127], 9))

console.log([1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127].includes(9))

const array1 = [1, 2, 3];

console.log(array1.includes(2));