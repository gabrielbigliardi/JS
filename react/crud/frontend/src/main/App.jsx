import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Routa from './Routa'

export default function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Logo />
                <Nav />
                <Routa />
                <Footer />
            </div>
        </BrowserRouter>
    )
}