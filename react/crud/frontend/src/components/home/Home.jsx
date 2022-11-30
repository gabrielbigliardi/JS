import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="início"
        subtitle="Projeto cadastro com React.">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className='mb-0'>Sistema para simular um cadastro, desenvolvido em React!</p>
    </Main>