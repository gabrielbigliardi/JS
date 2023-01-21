import React from 'react'
import './Card.css'
// import cardImage from '../imgs/katie-zaferes.png'
import star from '../imgs/star.png'


export default function Card(props) {
    // console.log(props)
    return (
        <div className='card'>
            <img className='card--img' src={ require(`../imgs/${props.img}`) } alt="Katie Zaferes" />
            <span className='card--openspots'>SOLD OUT</span>
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