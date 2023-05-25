/**
 * Front End Interview Questions: Falsy Values
 * 
 * Q: What are falsey values in JavaScript?
 * 
 * Qualque valor que pode ser avaliado como FALSE, quando por exemplo verificando uma variável, 
 * ela pode ser falsy em JS se for igual a um desses seis valores: 
 *      - undefined
 *      - null
 *      - NaN
 *      - 0
 *      - "" 
 *      - false
 * 
 * Are a set of unique values that evaluate the false, there are six of them /\
 */


/**
 * Front End Interview Questions: const vs let vs var
 * 
 * Q: What are the differences between const, let, and var?
 * 
 * a diferença está quanto ao escopo da variável e quanto a reatribuição de algum valor
 * 
 * let e var permitem que, à variável, seja reatribuido um novo valor. com const isso não é possivel.
 * 
 * e quanto ao escopo, const e let tem escopo de bloco. são acessíveis apenas dentro do escopo em que foram declaradas. 
 * diferente de var, que tem escopo global 
 * 
 */

/**
* Front End Interview Questions: == vs ===
* 
* Q: How does == vs === differ?
* 
*   == faz uma comparação apenas do valor, enquanto === compara o valor e o tipo do dado
*
*/

/**
 * Front End Interview Questions: undefined vs null
 * 
 * Q: What is the difference between undefined and null?
 * 
 *  null é usado para indicar a ausência de um objeto, e normalmente é usado intensionalmente pelo programador atribuindo null a uma variável.
 *  enquanto undefined é a indicação de que o dado não possui um valor, ou seja, é indefinido.
 */

/**
 * Front End Interview Questions: Data Types
 * 
 * Q: What are some JavaScript data types?
 * 
 *  são os tipos de dados de JavaScript, eles podem ser:
 *     primitevas:
 *      - Boolean
 *      - String
 *      - Number
 *      - BigInt
 *      - Symble
 * 
 *      - Object
 *      - Array
 *      - Map - objetos com chaves unicas
 *      - Set - arrays com valores unicos
 * 
 *      - Null
 *      - Undefined
 */


/**
 * Front End Interview Questions: Spread & Rest Operators
 * 
 * Q: What do the spread and rest operators do?
 * 
 *  ambos operadores usam ... porem sua aplicação difere
 *  
 *  o operador spread serve para espalhar valores de objetos ou arrays em uma nova variavel, possibilitando uma facil manipulação dos elementos
 * 
 *  o operador rest é utilizado para representar um numero variado de argumentos, previamente não sabidos.
 *  utilizando o rest como parametro de uma função, poderão ser passados indeterminados valores de argumentos.
 *  function soma(...number) {
 *      return nums.reduce((total, current) => { return total + current; }, 0)
 * }
 * 
 */

/**
 * Front End Interview Questions: Destructing Objects and Arrays
 * 
 * Q: What is and why might you destructure an object or array?
 * 
 *  é uma maneira facil de acessar itens de um objeto ou arrai, tirando-os de dentro do bloco, tornando-os acesssiveis fora do objeto, 
 *  facilitando na leitura do codigo, e o deixando mais limpo.
 * 
 *      const dob = [10, 25, 1987];
 *      const [day, month, year] = dob;
 * 
 *      const user = {
            f: 'Dylan',
            l: 'Israel'
        };
        
        const {f: firstName, l: lastName } = user;
 */


/**
 * Front End Interview Questions: Git Fundamentals
 * 
 * Q: What is Git? Why do you use it? What are some common commands you use?
 * Bonus Resource: https://try.github.io/
 * 
 *  é uma ferramenta de versionamento de código. usado para manter o controle sobre as alterações do codigo. permite a criação de um repositorio local na maquina o qual pode ser atualizado para um repositorio online, como é o caso do GitHub.
 *  podendo ai ser acessado por outras pessoas.
 *  permite que variass pessoas trabalhem em cima do mesmo projeto, e possibilita o controle da versão, para que todos trabalhem em cima do mesmo codigo
 *  
 *  comando comuns são o 
 *      pull para baixar para o repositorio local os arquivos
 *      push que envia para o repositorio remoto arquivos do repositorio local
 *      add . que adiciona os arquivos a uma fase de espera, stage
 *      commit que prepara os arquivos para serem enviados para o repositorio local, possibilitando a adição de comentarios referentes as alterações
 *      branch cria ramificações do repositorio principal
 */

/**
* Front End Interview Questions: Agile & Scrum
* 
* Q: What is Agile? What is Scrum?
*
*   formas de gerenciamento de projeto.
*
*
* Bonus Resource: https://scrumguides.org/
*/

/**
* Front End Interview Questions: CSS Selectors
* 
* Q: What are some CSS selectors and how do they differ?
*
*   são chaves para selecionar elementos do seu codigo para que possa ser acessivel e manipulada estilização com css.
        o mais basigo seria o seletor de tag, no qual se usa o nome da propria tag para selecionar elementos.
        classe pode ser usado para um ou mais elementos que compartilhem uma mesma caracteristica, atribuindo o estilo a todos elementos que possuem tal classe
        o id é mais limitado, podendo ser atribuido um unico id a um elemento. usado quando o elemento é unico.

        nas seleções podem ser usados metodos de seleção que leva em consideração tags filhas, pais ou irmas, por exemplo:
        div p { descendent: seleciona todas tags p filhas de uma div }
        div > p { child: filho direto, seleciona o primeiro elemento p filho de uma div}
        div ~ p { general sibling: seleciona todos elementos p irmãos de elementos div }
        div + p { adjacent sibling: seleciona o primeiro elemento p que vem em seguida do elemento div }

*
    alem disso existem os pseudo-seletores que envolvem o usuario interagindo ou mudando algo na pagina.
    permitem adicionar estilos aos elementos de acordo com determinado estado ou contexto que o elemento possa se encontrar,
    sem necessitar a mudança do codigo html
    pseudo classes: funcionam de acordo com interações ou estados do elemento. podendo adicionar estilo em cima de click, hover, focus, first-child

    pseudo elementos podem criar pseudo elementos para estilização. 
        ::before onde um pseudo-elemento é inserido antes do conteudo do elemento selecionado
        ::after onde um pseudo-elemento é inserido depois do conteudo do elemento selecionado
        ::first-line: Aplica estilos à primeira linha do conteúdo de um elemento.
        ::first-letter: Aplica estilos à primeira letra do conteúdo de um elemento.


*/


/**
* Front End Interview Questions: Responsive Design
* 
* Q: What is responsive design and how might you implement it?
*
        design responsivo tem a ver com acessibilidade. é poder modificar os elementos da pagina de acordo com o tamanho dela. 
        para que usuarios de desktops, notebooks, tablets, ou celulares, seja qual for a interface, possam utilizar a aplicação com uma boa experiencia.

        seja funcional e apareça correta em todas os tipos de telas.

* Bonus Resource: https://scrimba.com/course/gresponsive
*/


/**
 * Front End Interview Questions: Number Issues
 * 
 * Q: What are some issues with numbers in JavaScript you may have to protect against?
 * 
 *  com grandes numeros, existe a opção de utilizar BigInt
 *  com numeros decimais. soma de decimais podem nao ser mt precisas. proteção Math.round() ou toFixed()
 */


/**
 * Front End Interview Questions: Promises
 * 
 * Q: What are Promises and why might you use them?
 * 
 *  Pending: Promise está em ação
 *  Resolved/Fullfield: Sucesso
 *  Reject: não deu certo
 * 
 *  "codigo ssincrono ocorre em ordem"
 * 
 *  usada em chamadas API, e código assincrono.
 *  tratar de forma syncrona com async await
 * 
 * Bonus Resource: https://jsonplaceholder.typicode.com/
 */


/**
 * Front End Interview Questions: Pass by Value vs Pass by Reference
 * 
 * Q: What is pass by reference and how does it differ from pass by value?
 * 
 *  
 */





// FIVE QUESTIONS!? \/\/\/

/*
        1. HOW DO YOU STAY UP TO DATE?
        2. WHY YOU?
        3. WHY US?
        4. BIGGEST PROFFESIONAL ACHIEVEMENT?
        5. WHY ARE YOU LOOKING TO LEAVE YOUR JOB?
*/


// FIVE PREPARATIONS TIPS

/*
        1. EYE CONTACT
        2. RUBBER DUCKY METHOD
        3. APPEARANCE
        4. VIDEO INTRODUCTION
        5. BE EARLY AND BRING A BOOK
*/


// DO YOU HAVE ANY QUESTIONS FOR ME?

/*
        1. WHAT'S THE PROJECT / TEAM I'LL BE ON ?
        2. WHAT CODE QUALITY STANDARDS DOES THE ORGANIZATION FOLLOW? 
        3. WHAT IS THE BEST PART OF WORKING HERE?
        4. WHY ARE YOU INTERESTED IN HIRING ME?
        5. FINAL STATEMENT
*/
