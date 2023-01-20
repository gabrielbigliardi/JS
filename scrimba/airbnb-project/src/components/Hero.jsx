import React from 'react'
import grid from '../imgs/photo-grid.png'
import './Hero.css'

export default function Hero() {
    return (
        <div className='hero'>
            <img className='hero--img' src={grid} alt="Grid" />
            <h1>Online Experiences</h1>
            <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </div>
    )
}