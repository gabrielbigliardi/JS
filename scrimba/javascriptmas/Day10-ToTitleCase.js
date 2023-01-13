/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    let firstLetter = word.slice(0, 1).toUpperCase()
    let rest = word.slice(1)
    let wordCaptalized = firstLetter + rest
    return wordCaptalized
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    let words = str.split(' ')
    let wordsCapitalized = words.map(word => capitalizeWord(word))
    let strCapitalized = wordsCapitalized.join(' ')
    return strCapitalized
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));