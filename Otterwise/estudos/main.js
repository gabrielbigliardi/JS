// coment
function findLargest(arr) {
    let largest = 0
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest([2, 25, 1]));

// function findLargest(arr) {
//     arr.reduce(acum, elem => elem)
// }