import React from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetailLayout() {

    const params = useParams()
    const [vanDetail, setVanDetail] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVanDetail(data.vans[0])
            })
    }, [])

    console.log(vanDetail)
    return (
        <div>
            <img className="host--van-image" src={`${vanDetail.imageUrl}`} alt={`${vanDetail.name} image`} />
            <div>
                <span className="host--van-type">{`${vanDetail.type}`}</span>
                <h3 className="host--van-name">{`${vanDetail.name}`}</h3>
                <p className="host--van-price"><span>{`$${vanDetail.price}/day`}</span></p>
                <p>{`${vanDetail.description}`}</p> 
            </div>
        </div>
    )
}