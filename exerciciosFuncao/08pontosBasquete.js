const ponts = (str) => {
    let arr = str.split(" ")

    let higherPnts = arr[0]
    let worstGame = arr[0]
    let piorJogo = 0
    let recordGames = 0

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > higherPnts) {
            higherPnts = arr[i]
            recordGames++
        } else if (arr[i] < worstGame) {
            piorJogo = i + 1
        }
    }

    return [higherPnts, piorJogo]
}

console.log(ponts("32 17 33 09"))