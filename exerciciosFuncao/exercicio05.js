function format(formatando) {
    valorEmReais = `R$ ${formatando.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
    
}

format(0.3000)
format(0.1 + 0.2)