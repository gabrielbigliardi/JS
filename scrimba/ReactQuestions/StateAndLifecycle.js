/* 

    Qual a diferença entre props e state?

        props (short of properties) e state são javascript objects, ambos guardam informação que influenciam o que vai ser renderizado.
        porem props são passados pelos components, são tipo parametros de uma função.
        state são manuseados dentro de um dado componente, são como variaveis declaradas dentro de uma função. block scope
            state so é acessivel fora do componente se passado atraves de props


    Qual a diferença entre state em um class component e state em um function component?

        em um class component usa-se função this.getState, é algo que persiste, como um objeto
        em uma function component é algo que é rechamado multiplas vezes, pq nao é um objeto que persiste, é algo que é recall e reinstantiated


    What is the component lifecycle?

      *  Mouting: render, componentDidMount
      *  Updating: render, componentDidUpdate
      *  Unmounting: componentWillUnmount
      

    Como  atualizar o lifecycle em function components?

        use state, usando o hook useEffect
*/