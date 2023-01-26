import React from 'react'
import Main from '../template/Main'

export default function Home() {
    return (
        <Main icon="home" title="Início"
            subtitle="Projeto cadastro em React e Bootstrap.">
            <div className='display-4'>Bem Vindo!</div>
            <hr />
            <p className='mb-0'>Sistema para exemplificar a construção
                de um cadastro desenvolvido em React</p>
        </Main>
    )
}