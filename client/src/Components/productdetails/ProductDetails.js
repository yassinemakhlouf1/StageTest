import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./prodDetail.css";
import { getDetailProd } from "./prodDetApi";
export default function ProductDetails() {
  const { id } = useParams();

  const  test = ()=> {
    console.log("test");
  }
    const [data,setData]=useState();
    useEffect(()=>{
      const fetchData = async () => {
        const result = await getDetailProd(id);
        setData(result);
        console.log(result);
      };
      fetchData();
    }, []);    
  

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
