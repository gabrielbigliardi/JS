import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

/**
 * Challenge: move the data fetching from the useEffect
 * into a loader function instead. ALSO, do the same for
 * the VanDetail.jsx file as well, since that is also 
 * fetching data in a useEffect 😬
 */

export function loader() {
    return getHostVans()
}

export default function HostVans() {

    const vans = useLoaderData()

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <section>
                    {hostVansEls}
                </section>
            </div>
        </section>
    )
}