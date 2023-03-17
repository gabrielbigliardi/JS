function altCaps (str) {

    
    for(let i = 0; i < str.length; i++) {
        str.charAt(i).toUpperCase()
    }
    return str
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"))