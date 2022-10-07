// setTimeout(function() {                 //callback hell
//     console.log('executando callback 1')
    
//     setTimeout(function() {
//         console.log('executando callback 2')
        
//         setTimeout(() => {
//             console.log('executando callback 3')
//         }, 2000)
//     }, 2000)
// }, 2000)




// console.log('---------------------------------')

// const p = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(['Pizza', 'Hamburger', 'Bauru'])
//     }, 2000)
// })

// p 
//     .then(primeiro => primeiro[0])
//     .then(primeiro => primeiro[0])
//     .then(baixouONivel => baixouONivel.toLowerCase())
//     .then(console.log)
    
// p
//     .then(segundo => segundo[1])
//     .then(console.log)



//console.log('------------------');

function esperarPor(){
    return new Promise( resolve => {
        setTimeout(() => {
            console.log('Executando promise')
            resolve('vishhhhhhh')
        }, 2000)
    })
}

esperarPor(10000)
    .then(texto => console.log(texto))
    .then(() => esperarPor())
    .then(esperarPor)