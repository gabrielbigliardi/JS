function contemMesmosCaracteres(str1, str2) {
    let estaContido = true
    if(str1.length !== str2.length) {
        return false
    } else {
        for(let i = 0; i < str1.length; i++) {
            let str1letter = str1[i].toLowerCase()
            for(let j = 0; j< str2.length; j++){
                let str2letter = str2[j].toLowerCase()
                if(str1letter === str2letter) {
                    estaContido = true
                    break
                } else {
                    estaContido = false
                }
            }
            if(!estaContido){
                return false
            }
        }
        return true
    }
}

console.log(contemMesmosCaracteres('abc', 'bcA'))