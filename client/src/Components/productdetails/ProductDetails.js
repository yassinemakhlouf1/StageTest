import React, { useEffect } from "react";
import "./prodDetail.css";
export default function ProductDetails() {

  const  test = ()=> {
    console.log("test");
  }

  return (
    <div className="Product-container cartt" >
      <div >
    <div className="itheb ">
      <div className="image-containerr"><img src="/Product.png" alt=""/></div>
      <div className="image-containerr"><img src="/Product.png" alt=""/></div>
      <div className="image-containerr"><img src="/Product.png" alt=""/></div>
    </div>
    <div className="image-container-Big itheb"><img src="/Product.png" alt=""/></div></div>
    <div className="Product-container-details">
    
    <div >
      <div className="titlee">Appolo</div>
      <div className="Soustitle">Running Short</div>
      <div className="Size">Size:</div>
      <div className="SizeBox">
        <div className="Box">XS</div>
        <div className="Box">S</div>
        <div className="Box">L</div>
        <div className="Box">XL</div>
      </div>
      <div className="Size">color:</div>
      <div className="ColBox">
        <div className="ColorBox1"></div>
        <div className="ColorBox2"></div>
        <div className="ColorBox3"></div>
      </div>
      <div className="Size" >Price:</div>
      <div className="pricee">$50.00</div>
      <button className="button" onClick={test}  >ADD TO CART</button>
      <div className="textDet">Find stunning women"s cocktail dresses and party dresses.
      Stand out in lace and metallic cocktail
      dresses and party dresses from all your favorite brands.</div>
    </div>
    </div>
    </div>
  )
}
