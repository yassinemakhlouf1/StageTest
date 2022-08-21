import React, { useEffect, useState, useContext } from 'react';
import "./style.css";

import CartContext from '../../context/Context';


export default function Cart() {


const [count, setCount] = useState(1);

var currency = localStorage.getItem('currency');
var left= '<';
var right='>';

const   {items} = useContext(CartContext)
const {setItems} = useContext(CartContext)

const [cnt,setCnt] =useState([]);

useEffect(() => {
  window.addEventListener("storage", () => {
    setItems=(JSON.parse(localStorage.getItem('mycart')) || [])  
     console.log(items)    });
}, []);
     
useEffect(()=>{
  setItems(JSON.parse(localStorage.getItem("mycart")|| null));
  for (var i= 0 ;i<items.length;i++){
    setCnt([...cnt,cnt[i]=items[i].nbr]);
  }
  calculTotal();
},[]);

if(items===undefined){}

const {sizes} = useContext(CartContext)
const {setSizes} = useContext(CartContext)
const {SetSize} = useContext(CartContext)
const {quantity} = useContext(CartContext)
const {setQuantity} = useContext(CartContext)
const {img} = useContext(CartContext)
const {setImg} = useContext(CartContext)
const {tax} = useContext(CartContext)




const {calculTotal} = useContext(CartContext)
const {nombreProduit} = useContext(CartContext)
const {increment} = useContext(CartContext)
const {total} = useContext(CartContext)

const changeImg=(index,sign)=>{ 
  var i;
  if (sign==">"){
    var x =img[index][0];
    var y=img[index].length -1;
    for ( i=0;i<y;i++){
      img[index][i]=img[index][i+1];}
     img[index][y]=x
  setImg([...img])
   }
   else{
    var y=img[index].length -1;
    var x =img[index][y];
    for ( i=y;i>0;i--){
      img[index][i]=img[index][i-1];}
    img[index][0]=x;
  setImg([...img])
   }
   
}

  return (
    <div className='cart-container max'>    <div className='cart max'>Cart</div>
    <hr/>
    {items?.map((item,index)=>(
      
    <div key={item.product.name} >
 
    <div className='cart-container-detail max' >
        
    <div className="DetailProdc max">
      <div className="titleeC max" >{item.product.brand}</div>
      <div className="SoustitleC max">{item.product.name}</div>
      <div className="priceC max">{currency}{item.product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>

        <div style= {{display : "none"}}>{}</div>
        {item.product.attributes.map((attribute,i)=>(<div key={attribute.name+"_Cart_"+i}><div className='SizeC max'>{attribute.name}:</div>
              <div className="SizeBoxC max" >
              {attribute.items.map((attribute_item,ii)=>{
                if (attribute.name.toLowerCase().trim()=="color") {
                 return <button onClick={(e)=>{SetSize(attribute_item.value,index,i,ii) }} 
        style={{background: attribute_item.value,border: sizes[index][i]==attribute_item.value ? "2px solid rgba(94, 206, 123, 1)":"1px solid rgb(0,0,0)"}}className ="max ColorSelect" key={attribute_item.value+"_Cart_"+ii}></button>
      }else{
        return <button  onClick={(e)=>{SetSize(attribute_item.value,index,i,ii) }} 
                style={{background: sizes[index][i]===attribute_item.value ? "black" : "white", color: sizes[index][i]===attribute_item.value ? "white":"black"}} className="Box max" key={attribute_item.value+"_Cart_"+ii}>{attribute_item.value}</button>
                        }
                     
                      })}
                </div></div>

        ))}
        
        
        

      </div>
      <div className='container-right-c max'>
      <div className='container-nb max'>
      <button className='buttonC max' onClick={(e) => {increment(quantity[index],index,"+")}}>+</button>
      <p className='pCart max'>{quantity[index]}</p>
      <button className='buttonC max ' onClick={(e) => {increment(quantity[index],index,"-")}}>-</button>
    </div>
    <div className="image-containerC max">
      <img src={img[index][0]}  alt=""/>
      <button className='btn max' onClick={(e)=>changeImg(index,'>')} > {left} </button>
      <button className='btn1 max' onClick={(e)=>changeImg(index,'<')}> {right} </button>
      </div>
    
    </div>
    </div><hr/>
    
    </div>))}
  
    <div className='total max'>
    <div className='total-r max'>
    <div className='txt1 max'>Tax 21%:</div>
    <div className='txt1 max'>Quantity:</div>
    <div className='txt1 max'>Total:</div>
    </div>
    <div className='total-r mt-l max' >
    <div className='txt max'>{tax} </div>
    <div className='txt max'>{nombreProduit}</div>
    <div className='txt max'>{currency}{total}</div>
    </div>
    </div>
    <button className='button mr-t max'>ORDER</button>
    </div>
  )
}