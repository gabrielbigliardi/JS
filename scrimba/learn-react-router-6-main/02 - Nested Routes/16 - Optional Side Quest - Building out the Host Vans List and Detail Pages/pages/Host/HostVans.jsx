import React from "react"
import {Link} from "react-router-dom"

export default function HostVans() {

    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => {
                setHostVans(data.vans)
            })
    }, [])

    const hostVansDisplay = hostVans.map(van => {
        return (
            <Link
                to={`/host/vans/${van.id}`}
                key={`${van.id}`}
            >
                <div className="">
                    <img src={van.imageUrl} alt="van" className="hostVan--img"></img>
                    <div>
                        <h3 className="hostVan--name">{van.name}</h3>
                        <p className="hostVan--price">${van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    console.log(hostVans)

    return (
        <div className="hostVans--list">
            <h1>Your listed vans</h1>
            {hostVansDisplay}
        </div>
    )
}