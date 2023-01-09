// You are giving a string s that consists of only lowercase English 
// letters. If vowels ('a', 'e', 'i', 'o' and 'u') are giving a value 
// of 1 and consonants are given a value of 2, return the sum of all 
// of the letters in the input string.

function countVowelConsonant(str) {
    // write code here
    str = str.toLowerCase().split('')
    
    let some = 0
    for(let letter of str) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            some += 1
        } else {
            some += 2
        }
    }
    
    return some
    
  }
  
  console.log(countVowelConsonant('ABCdeioPsjJS'))