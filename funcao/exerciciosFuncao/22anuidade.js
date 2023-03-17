function valorAnuidade(mes) {
    let valorDaAnuidade = 250
    let valorComJuros
    switch(mes) {
        case 1:
            valorComJuros = valorDaAnuidade
            return `O valor da anuidade é de R$ ${valorDaAnuidade}.
            Com o juros o valor fica R$ ${valorComJuros}`
            
        case 2: 
            valorComJuros = valorDaAnuidade + (valorDaAnuidade * 0.05)
            return `O valor da anuidade é de R$ ${valorDaAnuidade}.
            Com o juros o valor fica R$ ${valorComJuros}`

        case 3:
            valorComJuros = valorDaAnuidade + (valorDaAnuidade * 0.1)
            return `O valor da anuidade é de R$ ${valorDaAnuidade}.
            Com o juros o valor fica R$ ${valorComJuros}`

        case 4: 
            valorComJuros = valorDaAnuidade + (valorDaAnuidade * 0.15)
            return `O valor da anuidade é de R$ ${valorDaAnuidade}.
            Com o juros o valor fica R$ ${valorComJuros}`
    }
}

console.log(valorAnuidade(1))
console.log(valorAnuidade(2))
console.log(valorAnuidade(3))