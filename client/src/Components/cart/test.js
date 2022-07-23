import React, { useEffect, useState } from 'react';
import "./style.css";

export default function Cart() {

  var length = 0

  const [count, setCount] = useState(1);

  var currency = localStorage.getItem('currency');




  

  const [taille,setTaille]=useState();

  
var left= '<';
var right='>';
const   [items, setItems] = useState(JSON.parse(localStorage.getItem("mycart")|| null));
const [cnt,setCnt] =useState([]);



const incrNbr =(val)=>{
  // setItems(items[val].nbr++) ;
  // window.localStorage.removeItem('mycart');
  // window.localStorage.setItem(JSON.stringify('mycart',items));
  // window.location.reload(false);
  // e.preventDefault();
  // setCnt(...cnt,cnt[0]++)
  // console.log(cnt)
}
useEffect(()=>{
  setItems(JSON.parse(localStorage.getItem("mycart")|| null));
  for (var i= 0 ;i<items.length;i++){
    setCnt([...cnt,cnt[i]=items[i].nbr])
  }
  console.log(cnt);
},[]);

if(items===undefined){}

const [sizes,setSizes] = useState(items.map((item)=>(item.taille)))

const SetSize = (val,i) =>{
  sizes[i]=(val)
  setSizes(sizes => [...sizes,sizes])
  setTaille(val);
  console.log('setsize='+taille)

}


  return (
    <div className='cart-container'>    <div className='cart'>Cart</div>
    <hr/>{console.log(items)}
    {items?.map((item,index)=>(
      
    <div >
 
    <div className='cart-container-detail' >
        
    <div className="DetailProdc">
      <div className="titleeC" >{item.product.brand}</div>
      <div className="SoustitleC">{item.product.name}</div>
      <div className="priceC">{currency}{item.product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>
      <div className="SizeC">Size:</div>
      <div className="SizeBoxC" >
        {/* <div className="BoxC">XS</div>
        <div className="BoxC">S</div>
        <div className="BoxC">L</div>
        <div className="BoxC">XL</div> */}

        <div style= {{display : "none"}}>{}</div>
        {console.log(index +":"+ sizes[index])}

        <button onClick={(e)=>{SetSize("XS",index);console.log(sizes) }} 
        style={{background: sizes[index]==="XS" ? "black" : "white", color: sizes[index]==="XS" ? "white":"black"}} className="Box">XS</button>
        <button onClick={(e)=>{SetSize("S",index);console.log(sizes)}}
        style={{background: sizes[index]==="S" ? "black" : "white", color: sizes[index]==="S" ? "white":"black"}} className="Box">S</button>
        <button onClick={(e)=>{SetSize("L",index);console.log(sizes)}}
        style={{background: sizes[index]==="L" ? "black" : "white", color: sizes[index]==="L" ? "white":"black"}} className="Box">L</button>
        <button onClick={(e)=>{SetSize("XL",index);console.log(sizes)}}
        style={{background: sizes[index]==="XL" ? "black" : "white", color: sizes[index]==="XL" ? "white":"black"}} className="Box">XL</button>
      </div>
      <div className="SizeC">color:</div>
      <div className="ColBoxC">
        <div className="ColorBox1C"></div>
        <div className="ColorBox2C"></div>
        <div className="ColorBox3C"></div>
      </div>
      </div>
      <div className='container-right-c'>
      <div className='container-nb'>
      <button className='buttonC' onClick={(e) => {incrNbr(index); console.log(index);e.preventDefault()}}>+</button>
      <p className='pCart'>{cnt[index]}</p>
      <button className='buttonC ' onClick={() => {if (count>0 ) setCount(count - 1)}}>-</button>
    </div>
    <div className="image-containerC">
      <img src={item.product.gallery[0]}  alt=""/>
      <button className='btn' > {left} </button>
      <button className='btn1'> {right} </button>
      </div>
    
    </div>
    </div><hr/>
    
    </div>))}
  
    <div className='total'>
    <div className='total-r'>
    <div className='txt1'>Tax 21%:</div>
    <div className='txt1'>Quantity:</div>
    <div className='txt1'>Total:</div>
    </div>
    <div className='total-r mt-l' >
    <div className='txt'>$42.00 </div>
    <div className='txt'>3</div>
    <div className='txt'>$2000</div>
    </div>
    </div>
    <button className='button mr-t'>ORDER</button>
    </div>
  )
}