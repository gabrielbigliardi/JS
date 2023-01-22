import React from 'react'
import './Card.css'
// import cardImage from '../imgs/katie-zaferes.png'
import star from '../imgs/star.png'


export default function Card(props) {
    // console.log(props)

    let badgeText
    if(props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if(props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className='card--img' src={ require(`../imgs/${props.img}`) } alt="Katie Zaferes" />
            {/* {!props.openSpots && <span className='card--badge'>SOLD OUT</span>} */}
            {/* <span className='card--openspots'>{props.openSpots > 0 ? 'ONLINE' : 'SOLD OUT'}</span> */}
            <div className='card--stats'>
                <img className='card--star' src={star} alt="Star"  />
                <span>{props.rating}</span>
                <span className='gray' >({props.reviewCount}) •</span>
                <span className='gray' >{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}