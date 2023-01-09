// Transform a given sentence into a new one with dashes between each
// two consecutive letters.

function insertDashes(str) {
    // write code here
    
    let words = str.split(' ')
    let letters = words.map(word => word.split('').join('-'))
    let formulatingWords = letters.join(' ')
    
    
    return formulatingWords
}


console.log(insertDashes('aba caba'))