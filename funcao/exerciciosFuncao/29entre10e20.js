function betweenTenAndTwenty(arr) {
    let between = 0
    let outside = 0
    let arrBetween = []
    let arrOutside = []

    for(let i = 0; i < arr.length; i++) {
        if((arr[i] >= 10) && (arr[i] <= 20)) {
            between++
            arrBetween.push(arr[i])
        } else {
            outside++
            arrOutside.push(arr[i])
        }
    }

    return `There are ${between} numbers between 10 and 20. It's: ${arrBetween}. And there are ${outside} outside 10 and 20. They are: ${arrOutside}`
}


function betweenTenAndTwenty2(arr) {
    let between = 0
    let outside = 0
    let arrBetween = []
    let arrOutside = []
    
    arr.filter((elem) => (elem >= 10) && (elem <= 20) ? arrBetween.push(elem) : arrOutside.push(elem))
    

    if(arrBetween.length !== 0) {
        arrBetween.reduce(() => {
            between++
        }, 1)
    } else {
        return 'There are not numbers between 10 and 20'
    }

    if(arrOutside.length !== 0) {
        arrOutside.reduce(() => {
            outside++
        }, 1)
    } 

    return `There are ${between} numbers between 10 and 20. It's: ${arrBetween}. And there are ${outside} outside 10 and 20. They are: ${arrOutside}`
}



console.log(betweenTenAndTwenty([2, 10, 18, 15, 8, 20, 35]))
console.log(betweenTenAndTwenty2([2, 10, 18, 15, 8, 20, 35]))
console.log(betweenTenAndTwenty2([2, 9, 8, 5, 8, 22, 35]))
console.log(betweenTenAndTwenty2([2, 10, 18, 15, 8, 20, 35]))