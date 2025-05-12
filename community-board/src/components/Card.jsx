import React from "react";
import image from '../assets/placeholder.png'
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="head">
                <img src={image} alt="" />
                <h3>{props.userName}</h3>
            </div>
            <div className="quotation">
                <h2>"{props.favScene}"</h2>
            </div>
            <h3>Page Number: {props.pageNum}, Book: {props.bookName}</h3>
        </div>
    )
}

export default Card;