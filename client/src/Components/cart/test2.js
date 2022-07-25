import React, { useEffect, useState } from 'react';
import "./style.css";

export default function Cart() {


  const [count, setCount] = useState(1);

  var currency = localStorage.getItem('currency');




  

  const [taille,setTaille]=useState();

  var c = -1

  
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

const [sizes,setSizes] = useState((items?.map((item,i)=>(item.attribute.map((attr)=>(attr))))))
const [quantity,setQuantity] = useState((items?.map((item,i)=>(item.nbr))))

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

  }

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
        {/* <div className="BoxC">XS</div>
        <div className="BoxC">S</div>
        <div className="BoxC">L</div>
        <div className="BoxC">XL</div> */}

        <div style= {{display : "none"}}>{}</div>
        {console.log(index)}
        {console.log(item.attribute.map((attribute,i)=>({attribute})))}


        {item.product.attributes.map((attribute,i)=>(<><div className='SizeC'>{attribute.name}:</div>
              <div className="SizeBoxC" >
              {attribute.items.map((attribute_item,ii)=>{ c=c+1
                if (attribute.name.toLowerCase().trim()=="color") {
                 return <button onClick={(e)=>{SetSize(attribute_item.value,index,i,ii);console.log(sizes) }} 
        style={{background: attribute_item.value,border: sizes[index][i]==attribute_item.value ? "2px solid rgba(94, 206, 123, 1)":"1px solid rgb(0,0,0)"}}className ="ColorSelect"></button>
      }else{
        return <button  onClick={(e)=>{SetSize(attribute_item.value,index,i,ii);console.log(sizes) }} 
                style={{background: sizes[index][i]===attribute_item.value ? "black" : "white", color: sizes[index][i]===attribute_item.value ? "white":"black"}} className="Box">{attribute_item.value}</button>
                        }
                     
                      })}
        {console.log(attribute.name.toLowerCase().trim())}
                </div></>

        ))}
        
        
        

      </div>
      <div className='container-right-c'>
      <div className='container-nb'>
      <button className='buttonC' onClick={(e) => {increment(quantity[index],index,"+")}}>+</button>
      <p className='pCart'>{quantity[index]}</p>
      <button className='buttonC ' onClick={(e) => {increment(quantity[index],index,"-")}}>-</button>
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