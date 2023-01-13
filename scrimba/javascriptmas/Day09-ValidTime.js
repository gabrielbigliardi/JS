// Check if the given string is a correct time representation 
// of the 24-clock hour

function validTime(str) {
    //  write code here.
    let [hour, minute] = str.split(':')
    // console.log(hour, minute)
    
    return (hour >= 0 && hour <= 23) && (minute >= 0 && minute <= 59) ? true : false
        
}

console.log(validTime('13:59'))
console.log(validTime('18:69'))
console.log(validTime('25:59'))