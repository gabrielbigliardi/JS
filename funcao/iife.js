// IIFE -> Imediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})()



//bom para fugir do escopo global
//cria uma função anonima, dentro de parenteses,
//e invoca a funcao, e tudo q estiver dentro sera executado