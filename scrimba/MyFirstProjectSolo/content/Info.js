import React from "react"

export default function Info() {
    return (
        <main className="main--">
            <img src="../images/Picture.png"/>
            <h1 className="main--name">Laura Smith</h1>
            <h2 className="main--job">Frontend Developer</h2>
            <h3 className="main--site">laurasmith.website</h3>
            <div className="main--buttons">
                <div className="main--email-button">
                    <button className="main--email-content-button"><img src="../images/Mail.png" alt="main--email-image"/>Email</button>
                </div>
                <div className="main--linkedin-button">
                    <button className="main--linkedin-content-button"><img src="../images/LinkedIn.png" />LinkedIn</button>
                </div>
            </div>
        </main>
    )
}