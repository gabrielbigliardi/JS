import React from "react"
import { useParams } from "react-router-dom"
import HostVanDetailLayout from "../../components/HostVanDetailLayout"

export default function HostVanDetail() {
    /**
     * Challenge (not optional!): build the shared UI portion of the
     * Host Van Detail page. This is
     * 
     * Optional portion: also style it to look like the design.
     * 
     * For now, get the data from a request to `/api/host/vans/:id`
     * and display the van image, name, price, type
     */


    
    const params = useParams()

    // console.log(params)
    // React.useEffect(() => {
    //     fetch(`/api/host/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])



    return (
        <div className="host--vans-detail">
            <HostVanDetailLayout />
        </div>
    )
}
