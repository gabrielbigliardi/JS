import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
export default function VanDetail() {
    
    /**
     * Challenge part 2:
     * Using the endpoint set up (with mirage js), fetch the data
     * for the van with the current ID from params.id. Log the data
     * that comes back to the console.
     * 
     * Hint: the endpoint is a GET request to `/api/vans/:vanid`
     */

    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
                console.log(data.vans)
            })
    }, [params.id])


    return <h1>Van detail page goes here</h1>
}