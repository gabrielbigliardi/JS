// import { random } from "lodash"
import React from "react"
import memesData from "../memesData"

export default function Meme() {

    // const [ memeImg, setMemeImg ] = React.useState()
    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4xgqu.jpg"
    })

    const [ allMemes, setAllMemes ] = React.useState(memesData)

    function getMeme() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const { url } = memesArray[randomNumber]
        const url = memesArray[randomNumber].url
        console.log(url)
        setMeme( prevMeme => ({ ...prevMeme, randomImage: url }))
    }

    return (
        <div className="meme">
            <div className="meme--inputs">
                <input type="text" placeholder="Upper text" className="meme--up-input" />
                <input type="text" placeholder="Down text" className="meme--down-input" />
            </div>
            <button className="meme--button" onClick={getMeme} >Get a new meme image 🖼</button>
            <img className="meme--img" src={meme.randomImage} alt="Meme" />
        </div>
    )
}