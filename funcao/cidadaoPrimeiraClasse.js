// Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal

function fun1() {} //recebe paramentros () e tem q haver o bloco {}

// Armazenar em uma variável

const fun2 = function () {}
//se chamar o nome da constante passando os parenteses, envoca-se a função.
//Chamando o nome da constante, passando como parametro p outra funcao,
//ou fazendo qlqr tipo de operação, vc invoca a função em si

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3));

// Armazenar em atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar());

// Passar uma função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b +c);
    }
} 
soma (2, 3) (4)
const cincoMais = soma (2, 3)
cincoMais(4)