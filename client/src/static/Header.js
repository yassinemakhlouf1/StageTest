import React, { useEffect, useState } from 'react';
import Cart from '../Components/cart/Cart';
import "./Header.css";
import useModal from "./useModal.js"
import Modal from "./cartOverlay.js";

export default function Header() {
  const [currency,Setcurrency]=useState('$');
  // const [mycart, setMyCarte] = useState([]);
  var mycart=[];
  const [selected, setSelected] = useState('$');
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('p1');
  const [link3, setLink3] = useState('p1');

  const { isShowing: isCartOverlayShowed, toggle: toggleCartOverlay } = useModal();
  ///
  const [taille,setTaille]=useState();
  var c = -1
var left= '<';
var right='>';
const   [items, setItems] = useState(JSON.parse(localStorage.getItem("mycart")|| null));
const [cnt,setCnt] =useState([]);
///


  const  SetactiveLink = (val)=>{
    console.log(window.location.href.split("/").pop());
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
    console.log(localStorage.getItem('currency'))
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
    console.log('aa');
    console.log(localStorage.getItem('currency'));
    Setcurrency(localStorage.getItem('currency'));
    console.log(currency);

    setSelected(currency);
  }
  calculTotal();
  },[])
  // const handleChange = (event: SelectChangeEvent) => {
  //   setSelected(event.target.value);
  // };
  ///


  if(items===undefined){}

  const [sizes,setSizes] = useState((items?.map((item,i)=>(item.attribute.map((attr)=>(attr))))))
  const [quantity,setQuantity] = useState((items?.map((item,i)=>(item.nbr))))
  const [img,setImg] = useState((items?.map((item,i)=>(item?.product.gallery.map((attr)=>(attr))))))
  console.log(img)
  console.log("quanti")
  console.log(quantity)
  
  const SetSize = (val,i,ii) =>{
    sizes[i][ii]=(val)
    items[i].attribute=sizes[i]
  
    console.log('items')
  
    console.log(items)
  
    
  
  localStorage.removeItem("mycart")
  const newItems = JSON.stringify(items)
  
  localStorage.setItem("mycart",newItems);
  
    setSizes([...sizes])
    
  }
  
  console.log("arrrrrrSIZESSrrrrrrrrrrrrrrrrrrr")
  console.log(sizes)
  
  const increment=(val,i,sign)=>{
    if (sign=="+"){
      val++
      quantity[i]=val
      items[i].nbr=quantity[i]
      console.log('items')
      console.log(items)
      localStorage.removeItem("mycart")
      const newItems = JSON.stringify(items)
  
  localStorage.setItem("mycart",newItems);
      setQuantity([...quantity])
    }else{
      if(val>1)
      {quantity[i]-=1 ;
        items[i].nbr=quantity[i]
  
      console.log('items')
  
      console.log(items)
      localStorage.removeItem("mycart")
      const newItems = JSON.stringify(items)
      localStorage.setItem("mycart",newItems);
      setQuantity([...quantity])}
      else
      {
        console.log(items);
       var aa=items[i].product.id
       const newItems=JSON.stringify(items.filter(data=>data.product.id != aa))
       console.log(newItems);
  
      localStorage.removeItem("mycart")
      localStorage.setItem("mycart",newItems);
      items.splice(i,1);
  
      }
  
    }
    calculTotal();
  }
  const [total,SetTotal] =useState(0);
  const [tax,SetTax] =useState();
  const [nombreProduit,SetNombreProduit] =useState();
  const calculTotal=()=>{
    console.log("aaa");
    setItems([...items])
 
    
    var nbreProduct=0;
    let  result=0;
    let  resultt=0;
    let  x=0;
    // item.product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())
  for(var i=0;i<items.length;i++){
    nbreProduct+=quantity[i];
    console.log()
  x=x+(parseInt(items[i].product.prices.map((p) => (() => {if(p.currency.symbol===localStorage.getItem('currency')){
    console.log(p.amount);console.log(p.currency.symbol);result=result+p.amount;
    return(p.amount)}})()))*quantity[i]);
  resultt=(resultt+result)*quantity[i];

  }
  let tax = parseFloat((resultt *21)/100).toFixed(2);
result=parseInt(resultt)+parseInt(tax);
result=parseFloat(result).toFixed(2);
SetTotal(result);
SetTax(tax);
SetNombreProduit(nbreProduct);
  }
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

            <option  value="None"></option>
            <option  value="$">USD</option>
            <option value="£" >GBP</option>
            <option value="A$"  >AUD</option>
            <option value="¥" >JPY</option>
            <option value="₽"  >RUB</option>
        </select> <a >
        <Modal
          isShowing={isCartOverlayShowed}
          hide={toggleCartOverlay}
          title=""
        >
           <b>My Bag</b>, {nombreProduit} items
           
           
    {console.log(items)}
    {items?.map((item,index)=>(
      
    <div className='pop-mg-top' >
 
    <div className='cart-container-detail max' >
        
    <div className="DetailProdc max">
      <div className="poptitleeC  max" >{item.product.brand}</div>
      <div className="poptitleeC  max">{item.product.name}</div>
      <div className="poppriceC mg-top max">{currency}{item.product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>
        {/* <div className="BoxC">XS</div>
        <div className="BoxC">S</div>
        <div className="BoxC">L</div>
        <div className="BoxC">XL</div> */}

        <div style= {{display : "none"}}>{}</div>
        {console.log(index)}
        {console.log(item.attribute.map((attribute,i)=>({attribute})))}


        {item.product.attributes.map((attribute,i)=>(<><div className='popSizeC mg-top max'>{attribute.name}:</div>
              <div className="SizeBoxC mg-top max" >
              {attribute.items.map((attribute_item,ii)=>{ c=c+1
                if (attribute.name.toLowerCase().trim()=="color") {
                 return <button onClick={(e)=>{SetSize(attribute_item.value,index,i,ii);console.log(sizes) }} 
        style={{background: attribute_item.value,border: sizes[index][i]==attribute_item.value ? "2px solid rgba(94, 206, 123, 1)":"1px solid rgb(0,0,0)"}}className ="max popColorSelect"></button>
      }else{
        return <button  onClick={(e)=>{SetSize(attribute_item.value,index,i,ii);console.log(sizes) }} 
                style={{background: sizes[index][i]===attribute_item.value ? "black" : "white", color: sizes[index][i]===attribute_item.value ? "white":"black"}} className="popBox max">{attribute_item.value}</button>
                        }
                     
                      })}
        {console.log(attribute.name.toLowerCase().trim())}
                </div></>

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
      {/* <button className='btn max' onClick={(e)=>changeImg(index,'>')} > {left} </button>
      <button className='btn1 max' onClick={(e)=>changeImg(index,'<')}> {right} </button> */}
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
  {/* <div className='cart-div'><Cart/></div> */}
  
    </>

  )
}