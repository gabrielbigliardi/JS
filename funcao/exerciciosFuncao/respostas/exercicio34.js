function compararStrings(string1, string2) {
    let comparacao = true
    var caractereString1 = []
    var caractereString2 = []
    for (let i = 0; i < string1.length; i++) {
        caractereString1 += string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            caractereString2 += string2.charAt(j).toLowerCase()
        }
    }
    console.log(caractereString1 + caractereString2);
}

const qlqrString = 'JumbaLina'
const qlqrString2 = 'AurarA'
compararStrings(qlqrString, qlqrString2)