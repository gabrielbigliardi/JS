/*

    Element: é algo criado pelo JSX como um objeto

    const reactElement = <div>Helllloooo</div>
    const domElement = document.getElementById('root')
    ReactDOM.render(reactElement, domElement)



    Component: é uma função que retorna um Element
            
    const Component = () => <div>Helllloooo</div>
    const domElement = document.getElementById('root')
    ReactDOM.render(<Component />, domElement)






    * Can you write React without JSX? YES

    const Component = () => React.createElement('div', null, 'Hellllooooo!')

    const domElement = document.getElementById('root')

    ReactDOM.render(<Component />, domElement)
*/