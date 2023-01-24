import React from "react"

export default function Meme() {
    return (
        <section className="meme">
            <div className="meme--inputs">
                <input type="text" placeholder="Upper text" className="meme--up-input" />
                <input type="text" placeholder="Down text" className="meme--down-input" />
            </div>
            <button className="meme--button">Get a new meme image 🖼</button>
        </section>
    )
}