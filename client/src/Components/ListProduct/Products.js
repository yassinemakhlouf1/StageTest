import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductCard.css';
import { products_details } from "./product_list_api";

const currency = "$"

const products = [
    {
        id: 1,
        title: "Apollo Running Short",
        price: "50.00",
        image: "./coat_image.png",
        stock: 10,
        cart:false,

    },
    {
        id: 2,
        title: "Apollo Running Short",
        price: "50.00",
        image: "./coat_image.png",
        stock: 20,
        cart:false,

    },
    {
        id: 3,
        title: "Apollo Running Short",
        price: "50.00",
        image: "./coat_image.png",
        stock: 30,
        cart:false,

    },
    {
        id: 4,
        title: "Apollo Running Short",
        price: "50.00",
        image: "./coat_image.png",
        stock: 20,
        cart:false,

    },
    {
        id: 5,
        title: "Apollo Running Short",
        price: "50.00",
        image: "./coat_image.png",
        stock: 0,
        cart:false,
    },
    {
        id: 6,
        title: "Apollo Running Short",
        price: "50.00",
        image: "./coat_image.png",
        stock: 45,
        cart: true,
    },
    ]

export default function Products(props) {

  const { id } = useParams();

  const  test = ()=> {
    console.log("test");
  }
    const [data,setData]=useState();
    useEffect(()=>{
      const fetchData = async () => {
        const result = await products_details(id);
        setData(result);
        console.log(result);
      };
      fetchData();
    }, []);    


    


      const content = products.map((product) =>
        <div  className= {
          (() => {
              if(product.stock===0) {return('card-container-blurred')}
              else if(product.cart===true) {return('selected-card-container')}
              else {return('card-container')}
            }
          )()  
            }   key={product.id}>
          <img className='image-container' src={product.image} alt='' />
          { product.cart === true && <img className="cart-image" src="./incart.png" alt='' />}
          { product.stock === 0 && <div className="oos-container">OUT OF STOCK</div>}
          <div className='content-container'>
          <div div className='title'>{product.title}</div>
          <div className='price'>{currency}{product.price}</div>
          </div>
        </div>
      );
      return (
        <div><div className="category-name">Category Name</div>
        <div className="all-cards-container">
        {content}
        </div></div>
      );
    }

    