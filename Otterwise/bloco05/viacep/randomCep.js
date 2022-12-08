const numRandom = () => Math.floor(Math.random() * (29099999 - 29000000 + 1)) + 29000000  
// console.log(numRandom())

export const cepAleatorios = () => {
    const ceps = []
    for (let i = 0; i < 10; i++) {
        ceps.push(numRandom())
    }
    return ceps
}