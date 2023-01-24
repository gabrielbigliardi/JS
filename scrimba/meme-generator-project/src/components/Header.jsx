import React from 'react'
import './style.css'

export default function Header() {
  return (
    <nav className="meme--nav">
      <img src={require(`../imgs/Troll Face.png`)} className="troll-face" />
      <h1 className="meme--title">Meme Generator</h1>
      <h3 className="meme--description">React Course - Project 3</h3>
    </nav>
  )
}
