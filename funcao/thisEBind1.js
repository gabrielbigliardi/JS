const pessoa = {
    saudacao: 'Bom dia!',
    despedida: 'Adeus!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas, funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind função que passa o objeto no qual
                                                //quer que seja resolvido o this
falarDePessoa()