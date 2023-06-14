import React from "react"
import { useOutletContext } from "react-router-dom"


export default function HostVanPhotos() {


    const [currentVan, setCurrentVan] = useOutletContext()

    console.log(currentVan)


    return (
        <h2>Photos go here</h2>
    )
}