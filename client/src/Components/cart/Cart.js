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

useEffect(()=>{
  setItems(JSON.parse(localStorage.getItem("mycart")|| null));
  for (var i= 0 ;i<items.length;i++){
    setCnt([...cnt,cnt[i]=items[i].nbr]);
  }
  console.log(cnt);
  calculTotal();
},[]);

if(items===undefined){}

const [sizes,setSizes] = useState((items?.map((item,i)=>(item.attribute.map((attr)=>(attr))))))
const [quantity,setQuantity] = useState((items?.map((item,i)=>(item.nbr))))
const [img,setImg] = useState((items?.map((item,i)=>(item?.product.gallery.map((attr)=>(attr))))))
const SetSize = (val,i,ii) =>{
  sizes[i][ii]=(val)
  items[i].attribute=sizes[i]
localStorage.removeItem("mycart")
const newItems = JSON.stringify(items);
localStorage.setItem("mycart",newItems);
  setSizes([...sizes])  
}

const increment=(val,i,sign)=>{
  if (sign=="+"){
    val++
    quantity[i]=val
    items[i].nbr=quantity[i];
    localStorage.removeItem("mycart")
    const newItems = JSON.stringify(items)
localStorage.setItem("mycart",newItems);
    setQuantity([...quantity])
  }else{
    if(val>1)
    {quantity[i]-=1 ;
      items[i].nbr=quantity[i]
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
const [total,SetTotal] =useState(0);
const [tax,SetTax] =useState();
const [nombreProduit,SetNombreProduit] =useState();
const calculTotal=()=>{
  var nbreProduct=0;
  let  result=0;
  let  resultt=0;
  let  x=0;
  // item.product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())
for(var i=0;i<items.length;i++){
  nbreProduct+=quantity[i];
  console.log()
x=x+(parseInt(items[i].product.prices.map((p) => (() => {if(p.currency.symbol===localStorage.getItem('currency')){
  console.log(p.amount);console.log(p.currency.symbol);result=p.amount;
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
  return (
    <div className='cart-container max'>    <div className='cart max'>Cart</div>
    <hr/>{console.log(items)}
    {items?.map((item,index)=>(
      
    <div key={index} >
 
    <div className='cart-container-detail max' >
        
    <div className="DetailProdc max">
      <div className="titleeC max" >{item.product.brand}</div>
      <div className="SoustitleC max">{item.product.name}</div>
      <div className="priceC max">{currency}{item.product.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>
        {/* <div className="BoxC">XS</div>
        <div className="BoxC">S</div>
        <div className="BoxC">L</div>
        <div className="BoxC">XL</div> */}

        <div style= {{display : "none"}}>{}</div>
        {console.log(index)}
        {console.log(item.attribute.map((attribute,i)=>({attribute})))}


        {item.product.attributes.map((attribute,i)=>(<><div className='SizeC max'>{attribute.name}:</div>
              <div className="SizeBoxC max" >
              {attribute.items.map((attribute_item,ii)=>{ c=c+1
                if (attribute.name.toLowerCase().trim()=="color") {
                 return <button onClick={(e)=>{SetSize(attribute_item.value,index,i,ii);console.log(sizes) }} 
        style={{background: attribute_item.value,border: sizes[index][i]==attribute_item.value ? "2px solid rgba(94, 206, 123, 1)":"1px solid rgb(0,0,0)"}}className ="max ColorSelect"></button>
      }else{
        return <button  onClick={(e)=>{SetSize(attribute_item.value,index,i,ii);console.log(sizes) }} 
                style={{background: sizes[index][i]===attribute_item.value ? "black" : "white", color: sizes[index][i]===attribute_item.value ? "white":"black"}} className="Box max">{attribute_item.value}</button>
                        }
                     
                      })}
        {console.log(attribute.name.toLowerCase().trim())}
                </div></>

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