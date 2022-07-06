import React from "react"
import './ProductCard.css';

export default function ProductCard({title, imageUrl, price}) {
    
    return (

        <><div className="category-name">Category Name</div>
        <div className="all-cards-container">

            <div className='selected-card-container'>

                <img className='image-container' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" alt='' />
                <img className="cart-image" src="./incart.png" alt='' />
                <div className='content-container'>
                    <div className='title'>{title}</div>
                    <div className='price'>{price}</div>
                </div>
            </div>
            <div className='card-container'>
                <img className='image-container' src={imageUrl} alt='' />
                <div className='content-container'>
                    <label className='title'>{title}</label>
                    <label className='price'>{price}</label>
                </div>
            </div>
            <div className='card-container-blurred'>

                <img className='image-container' src={imageUrl} alt='' />
                <div className="oos-container">OUT OF STOCK</div>
                <div className='content-container'>
                    <div className='title'>{title}</div>
                    <div className='price'>{price}</div>
                </div>

            </div>
            <div className='selected-card-container'>

                <img className='image-container' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" alt='' />
                <img className="cart-image" src="./incart.png" alt='' />
                <div className='content-container'>
                    <div className='title'>{title}</div>
                    <div className='price'>{price}</div>
                </div>
            </div>
            <div className='card-container'>
                <img className='image-container' src={imageUrl} alt='' />
                <div className='content-container'>
                    <label className='title'>{title}</label>
                    <label className='price'>{price}</label>
                </div>
            </div>
            <div className='card-container-blurred'>

                <img className='image-container' src={imageUrl} alt='' />
                <div className="oos-container">OUT OF STOCK</div>
                <div className='content-container'>
                    <div className='title'>{title}</div>
                    <div className='price'>{price}</div>
                </div>

            </div>
        </div></>
    )}
