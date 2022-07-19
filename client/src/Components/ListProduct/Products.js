import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductCard.css';
import { products_details } from "./product_list_api";

var currency = localStorage.getItem('currency');

var category = "All"


export default function Products(props) {

  const { id } = useParams();

    const [data,setData]=useState();
    useEffect(()=>{
      const fetchData = async () => {
        const result = await products_details(id);
        result.map((p) => (() => {if(id==="clothes"){setData(result[1].products);category="Clothes"}
      else if(id==="tech"){setData(result[2].products);category="Tech"}
      else {setData(result[0].products)}})())
        
      };
      fetchData();
    }, []);    

    if (data === undefined) {
        return <div>Still loading...</div>;
      }
    
    
    const content = data.map((product) =>

    <div  className= {
      (() => {
          if(product.inStock===false) {return('card-container-blurred')}
          //else if(product.cart===true) {return('selected-card-container')}
          else {return('card-container')}
        }
      )()  
        }   key={product.id}>
      <img className='image-container' src={product.gallery[0]} alt='' />
      { product.cart === true && <img className="cart-image" src="./incart.png" alt='' />}
      { product.inStock === false && <div className="oos-container">OUT OF STOCK</div>}
      <div className='content-container'>
      <div div className='title'>{product.name}</div>
      <div className='price'>{currency}{product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>
      </div>
    </div>
  );
  return (
    <div><div className="category-name">{category}</div>
    <div className="all-cards-container">
    {content}
    </div></div>
  );
    }

    