import React from "react"
import { useOutletContext } from "react-router-dom"


export default function HostVanPricing() {

    const [currentVan, setCurrentVan] = useOutletContext()

    console.log(currentVan)

    return (
        <h2>Pricing info goes here</h2>
    )
}