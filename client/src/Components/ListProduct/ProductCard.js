import React from "react"
import './ProductCard.css';

export default function ProductCard({title, imageUrl, price}) {
    return (
<div className='card-container'>
        <img className='image-container' src={imageUrl} alt=''  />
        <div className="content-container">
            <label className='title'>{title}</label>
            <label className='price'>{price}</label>
</div>
</div>
    )}
