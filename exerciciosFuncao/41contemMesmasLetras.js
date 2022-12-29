function contemMesmasLetras (str1, str2) {
    let contem = false
    let letraA = ''
    let letraB = ''
    for(let i = 0; i < str1.length; i++) {
        letraA = str1[i]
        for(let j = 0; j < str2.length; j++) {
            letraB = str2[j]
            if (letraA === letraB) {
                contem = true
                break 
            } else if (letraA !== letraB) {
                contem = false
            }
        }
        if (!contem) {
            return contem
        }
    }
    return contem
}

console.log(contemMesmasLetras('abcd', 'aBcd'))