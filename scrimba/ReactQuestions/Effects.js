/*

    Quais parametros useEffect recebe?
        o primeiro é uma função (effect function) que sera rodada
        o segundo é um array (dependency array), que determina quando será rodada


    Quando useEffect function roda?
        
        [] -> roda quando monda, quando o componente é inicializado
        [variable] -> quando monta e também quando a variavel dentro do array muda
        noarray -> quando monta e em qualquer mudança state dentro da aplicação


    O que é o valor retornado de uma usseEffect function?
        o valor retornado é chamado clean up function, limpa qualquer coisa que possa existir quando o componente é posto na pagina pela primeira vez
        como event listners, fetch cancelation, cancel any subscription

*/