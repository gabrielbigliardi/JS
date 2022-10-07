function textos(tex1, tex2) {
    let contido = true
    let carac1 
    let carac2
    for (let i = 0; i < tex1.length; i++) {
        carac1 = tex1.charAt(i).toLowerCase()
        for (let j = 0; j < tex2.length; j++) {
            carac2 = tex2.charAt(j).toLowerCase()
            if (carac1 == carac2) {
                contido = true
                break
                console.log('esse codigo nunca sera executado')
            }
            console.log("quando os caracteres forem diferentes eu aparecerei");
        }  
        if (!contido) { return contido }
    }
    return contido
}

console.log(textos('cab', 'bac'))