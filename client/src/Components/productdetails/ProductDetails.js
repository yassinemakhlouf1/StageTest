import React from 'react'
import './ProdDetail.css';
export default function ProductDetails() {
  return (
    <div className='Product-container'>
    <div>
      <div className='image-container'><img src="/Product.png" alt=""/></div>
      <div className='image-container'><img src="/Product.png" alt=""/></div>
      <div className='image-container'><img src="/Product.png" alt=""/></div>
    </div>
    <div className='Product-container-details'>
    <div className='image-container-Big'><img src="/Product.png" alt=""/></div>
    <div className='DetailProd'>
      <div className='title'>Appolo</div>
      <div className='Soustitle'>Running Short</div>
      <div className='Size'>Size:</div>
      <div className='SizeBox'>
        <div className='Box'>XS</div>
        <div className='Box'>S</div>
        <div className='Box'>L</div>
        <div className='Box'>XL</div>
      </div>
      <div className='Size'>color:</div>
      <div className='ColBox'>
        <div className='ColorBox1'></div>
        <div className='ColorBox2'></div>
        <div className='ColorBox3'></div>
      </div>
      <div className='Size'>Price:</div>
      <div className="price">$50.00</div>
      <button className='button' >ADD TO CART</button>
      <div className='textDet'>Find stunning women's cocktail dresses and party dresses.
      Stand out in lace and metallic cocktail
      dresses and party dresses from all your favorite brands.</div>
    </div>
    </div>
    </div>
  )
}
