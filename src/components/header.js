import React from "react"
import Photo from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img src={Photo} className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React project</h4>
        </header>

    )
}