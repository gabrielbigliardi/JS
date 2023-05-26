/*
    Como passa um valor de um parent para um child?
        Via Props


    E como passa de um child para parent?
        passando uma function prop
        parent passa uma function para um child via props, e o child call a function e a function sendo chamada passa para o parent


    O que é prop-drilling?
        é ir passando props por varios componentes
        passar props via multiplos niveis


    Can you modify props?
        não, elas sao feitas para ser read only, se é para modificar as coisas usa-se state.
        porque functions sao pure components
*/