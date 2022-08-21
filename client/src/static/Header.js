import React, { useEffect, useState, useContext } from 'react';
import "./Header.css";
import useModal from "./useModal.js"
import Modal from "./cartOverlay.js";

import CartContext from '../context/Context';

export default function Header() {

  
  const [currency,Setcurrency]=useState('$');
  const [selected, setSelected] = useState('$');
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('p1');
  const [link3, setLink3] = useState('p1');

  const { isShowing: isCartOverlayShowed, toggle: toggleCartOverlay } = useModal();

  const {items} = useContext(CartContext)
  const {setItems} = useContext(CartContext)


  

  console.log(items)




  const  SetactiveLink = (val)=>{
    if (val=='tech'){
      setLink2('');
      setLink1('p1')
      setLink3('p1');
    } else {
      if(val=='clothes'){
        setLink1('p1');
        setLink2('p1');
        setLink3('');
      }
      else {
        setLink1('');
        setLink2('p1');
        setLink3('p1');
      }
    }
  }
  const  updateCurrancy = (cur)=>{
    setsymbole(cur);
    localStorage.setItem('currency',cur);
    window.location.reload(false);

  }
  const currencyDisplay = () =>{
    if(localStorage.getItem('currency'))
    return <div className='divH '>{localStorage.getItem('currency')}</div>
    else
    return <div className='divH '>{selected}</div>
  }
  const  setsymbole = (val)=> {
    setSelected(val);
  }
  useEffect((e)=>  {
    SetactiveLink(window.location.href.split("/").pop());
    
    
    
    if((!localStorage.getItem('mycart') || !localStorage.getItem('currency'))){
    localStorage.setItem('currency',currency);
    localStorage.setItem('mycart','[]');
  } else {
    
    Setcurrency(localStorage.getItem('currency'));

    setSelected(currency);
  }
  calculTotal();
  },[])



 

  const {quantity} = useContext(CartContext)
  const {setQuantity} = useContext(CartContext)
  const {img} = useContext(CartContext)
  const {setImg} = useContext(CartContext)
  const {sizes} = useContext(CartContext)
  const {setSizes} = useContext(CartContext)
  const {SetSize} = useContext(CartContext)
  const {calculTotal} = useContext(CartContext)
  const {nombreProduit} = useContext(CartContext)
  const {increment} = useContext(CartContext)
  const {total} = useContext(CartContext)





  
  

  
  
  //
  return (
   
  
  <>
      <div className='app-head '>
        <div className='divH ml-0'>
        <a className="active"  href='/all' id={link1}  >all</a>
        <a className="active p0"  href='/tech' id={link2} >Tech</a>
        <a className="active p0"  href='/clothes' id={link3} >Clothes</a>
        </div>
        
        <div className='divH'>
       <img src="/Greenicon.png" alt="" />
        </div>
        <div className='divH mr-0'>
          {currencyDisplay()}
          <select onChange={(e)=>updateCurrancy(e.target.value)} value={'None'} className="selectH">

            <option value="None"></option>
            <option value="$" >USD</option>
            <option value="£" >GBP</option>
            <option value="A$">AUD</option>
            <option value="¥" >JPY</option>
            <option value="₽" >RUB</option>
        </select> <a>
        <Modal
          isShowing={isCartOverlayShowed}
          hide={toggleCartOverlay}
          title=""
        >
           <b>My Bag</b>, {nombreProduit} items
           
           
    {items?.map((item,index)=>(
      
    <div className='pop-mg-top'key={item.product.name} >
 
    <div className='cart-container-detail max' >
        
    <div className="DetailProdc max">
      <div className="poptitleeC  max" >{item.product.brand}</div>
      <div className="poptitleeC  max">{item.product.name}</div>
      <div className="poppriceC mg-top max">{currency}{item.product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>



        {item.product.attributes.map((attribute,i)=>(<div key={attribute.name}><div className='popSizeC mg-top max'>{attribute.name}:</div>
              <div className="SizeBoxC mg-top max" >
              {attribute.items.map((attribute_item,ii)=>{
                if (attribute.name.toLowerCase().trim()=="color") {
                 return <button onClick={(e)=>{SetSize(attribute_item.value,index,i,ii); }} 
        style={{background: attribute_item.value,border: sizes[index][i]==attribute_item.value ? "2px solid rgba(94, 206, 123, 1)":"1px solid rgb(0,0,0)"}}className ="max popColorSelect" key={attribute_item.value+""+ii}></button>
      }else{
        return <button  onClick={(e)=>{SetSize(attribute_item.value,index,i,ii); }} 
                style={{background: sizes[index][i]===attribute_item.value ? "black" : "white", color: sizes[index][i]===attribute_item.value ? "white":"black"}} className="popBox max" key={attribute_item.value+""+ii}>{attribute_item.value}</button>
                        }
                     
                      })}

                </div></div>

        ))}
        
        
        

      </div>
      <div className='container-right-c max'>
      <div className='container-nb max'>
      <button className='popbuttonC max' onClick={(e) => {increment(quantity[index],index,"+")}}>+</button>
      <p className='pCart max'>{quantity[index]}</p>
      <button className='popbuttonC max ' onClick={(e) => {increment(quantity[index],index,"-")}}>-</button>
    </div>
    <div className="image-containerC max">
      <img className='popimg' src={img[index][0]}  alt=""/>
      </div>
    
    </div>
    </div>
    
    </div>))}
    <div className='pop-mg-top poptotal'>
    <div className='poptot'>Total</div>
    <div className=''>{currency}{total}</div>
    </div>
    <div className='pop-div-btn '>
      <a href='/cart' ><button className='pop-btn pop-lf-btn'  >VIEW BAG</button></a>
      <button className='pop-btn mg-left' >CHECK OUT</button>
    </div>
        </Modal>
        {items?.length>0?(<span className='Quantity' ><div className='Quantity-nb'>{items?.length}</div></span> ):("")}
        <img onClick={()=>{calculTotal();toggleCartOverlay();}} src="/Vector.png" alt=""/>

        </a>
        </div>
      </div>  
    </>

  )
}