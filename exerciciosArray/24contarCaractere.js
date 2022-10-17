const contarCaractere = (caractere, frase) => {
    let contCarac = 0
    
    for(let i = 0; i < frase.length; i++) {
        if(frase.charAt(i) === caractere) {
            contCarac++
        }
    }

    return contCarac
}

console.log(contarCaractere('a','ser ou nao ser'))


const contarCaractere2 = (caractere,frase) => {

    return [...frase].filter(c => c === caractere).length

}

console.log(contarCaractere('e', 'rato roeu a roupa do rei de westeros'))
