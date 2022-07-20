import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProdDetail.css";
import { getDetailProd } from "./prodDetApi";
export default function ProductDetails() {
  const { id } = useParams();
  var currency = localStorage.getItem('currency');

  var oldcart = []

  const products = 
    {
      id: id,
      nbr: 1,
      taille:"xl"
    }
  
 var newcart=(products)
  const  test = ()=> {
   
    var mycart=[];
    if(localStorage.getItem('mycart')!== null){
    oldcart=JSON.parse(""+localStorage.getItem('mycart'))
    console.log(oldcart)
    mycart=oldcart
  }else
{     mycart.push(localStorage.getItem('mycart') || null);
}    
  
  var bool=false;
  try{
     for (const i in mycart) {
      if (mycart[i].id===id){
      bool=true;}
     }
    }
    catch (err){
      console.log(err)
    }
    console.log(mycart)
     console.log(bool);
   if (bool===false){
  mycart.push(newcart);}
    // mycart.push(newcart)
  localStorage.setItem('mycart', JSON.stringify(mycart));
  console.log(localStorage.getItem('mycart').toString())
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
  

  return (<>
    {data?(
    <div className="Product-container cartt" >
      <div >
    <div className="itheb ">
      <div className="image-containerr"><img src={data.gallery[0]} alt=""/></div>
      <div className="image-containerr"><img src={data.gallery[1]} alt=""/></div>
      <div className="image-containerr"><img src={data.gallery[2]} alt=""/></div>
    </div>
    <div className="image-container-Big itheb"><img src={data.gallery[3]} alt=""/></div></div>
    <div className="Product-container-details">
    
    <div >
      <div className="titlee">{data.brand}</div>
      <div className="Soustitle">{data.name}</div>
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
      <div className="pricee">{currency}{data.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>
      <button className="button" onClick={test}  >ADD TO CART</button>
      <div className="textDet">{data.description}</div>
    </div>
    </div>
    </div>
  ):(<div>Not Accecible</div>)}
  </>
  )
}
