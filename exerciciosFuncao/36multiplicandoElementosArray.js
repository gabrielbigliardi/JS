const arr = [2, 4, 5, 8, 10]

function multArray(arr, num) {
    // let mult = 1
    for(let i = 0; i < arr.length; i++) {
            num = num * arr[i]
        }
        return num
}

console.log(multArray(arr, 3))


function multArrayMaiorQ5(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 5) {
            num *= arr[i]
        }
    }
    return num
}

console.log(multArrayMaiorQ5(arr, 2))