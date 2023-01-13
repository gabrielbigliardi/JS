// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    
    const randomNumber = Math.floor(Math.random() * 10) + 1
    
    const arr = new Array(randomNumber)
    const tacosArray = arr.fill('🌮') 
    
    return tacosArray // replace this empty tray array

}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map((taco) => `<div class="taco">${taco}</div>`).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
