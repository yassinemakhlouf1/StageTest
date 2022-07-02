import React from "react"

export default function ProductCard({title, imageUrl, price}) {
    return (
      <div className='card-container'>
          <div className='image-container'>
              <img src={imageUrl} alt=''/>
          </div>
          <div className='product-name'>
              <h4>title</h4>
          </div>
          <div className='product-price>'>
              <p>price</p>
          </div>
      </div>
    )
  }
  