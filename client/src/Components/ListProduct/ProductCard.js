import React from "react"
import './ProductCard.css';

export default function ProductCard({title, imageUrl, price}) {
    return (
<div class='card' className='card-container'>
        <img className='image-container' src={imageUrl} alt=''  />
        <div className="content-container">
            <label class='title'>{title}</label>
            <label class='price'>{price}</label>
</div>
</div>
    )}
