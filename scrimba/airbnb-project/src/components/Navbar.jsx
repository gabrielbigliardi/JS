import React from 'react'
import './Navbar.css'
import logo from '../imgs/airbnb-logo.png'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='navbar--logo' src={logo} alt="Airbnb Logo"  />
        </nav>
    )
}
