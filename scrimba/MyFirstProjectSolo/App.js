import React from "react"
import ReactDOM from "react-dom"
import Info from "./content/Info.js"
import About from "./content/About.js"
import Interests from "./content/Interests.js"
import Footer from "./content/Footer.js"

export default function App() {
    return (
        <div className="app--">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
} 