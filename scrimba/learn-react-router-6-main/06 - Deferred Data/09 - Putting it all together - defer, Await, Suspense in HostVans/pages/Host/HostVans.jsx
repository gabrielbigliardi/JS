import React, { Suspense } from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

/**
 * Challenge: Implement defer, Await, and Suspense in the
 * /host/vans route.
 */

export async function loader({ request }) {
    await requireAuth(request)
    return defer({hostVans: getHostVans()})
}

export default function HostVans() {
    const vans = useLoaderData()
    console.log(vans)

    function renderVansHost (hostVans) {
        console.log(hostVans)
        const hostVansEls = hostVans.map(van => (
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
            <div className="host-vans-list">
                <section>
                    {hostVansEls}
                </section>
            </div>

        )

    }

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={vans.hostVans}>
                    {renderVansHost}

                </Await>
            </Suspense>
        </section>
    )
}