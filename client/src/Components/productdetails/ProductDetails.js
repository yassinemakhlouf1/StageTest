import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./prodDetail.css";
import { getDetailProd } from "./prodDetApi";
export default function ProductDetails() {
  const { id } = useParams();
  const [bxs, setXs] = useState('bSelected');
  const [bs, setS] = useState('bnotSelected');
  const [bl, setL] = useState('bnotSelected');
  const [bxl, setXl] = useState('bnotSelected');
  var currency = localStorage.getItem('currency');
  const [taille,setTaille]=useState('XS');
  const [color,setColor]=useState('gris');
  const [gris,setGris]=useState('ClBoxselected');
  const [green,setGreen]=useState('');
  const [black,setBlack]=useState('');
  
  const resetButton = () =>{
    setXs('bnotSelected');
    setS('bnotSelected');
    setL('bnotSelected');
    setXl('bnotSelected');
  }
  const setButtonColor = (val) =>{
    setGris('');
    setGreen('');
    setBlack('');
    setColor(val);
    
    if (val=='gris'){
    setGris('ClBoxselected')}
    if (val=='green'){
      setGreen('ClBoxselected')}
      if (val=='black'){
        setBlack('ClBoxselected')}
        console.log(color);
  }
 
  const SetSize = (val) =>{
    if (val=='S'){
      resetButton();
      setS('bSelected');
    }else if (val=='L'){
      resetButton();
      setL('bSelected');
    }else if (val=='XL'){
      resetButton();
      setXl('bSelected');
    }else {
      resetButton();
      setXs('bSelected');
    }
    setTaille(val);
    console.log('setsize='+taille)

  }

  
  const  test = ()=> {
   
  //   var mycart=[];
  //    mycart.push(localStorage.getItem('mycart') || null);
  //    var newcart=JSON.stringify({
  //     id: id,
  //     nbr: 1,
  //     taille:"xl"
  // })
  const items = JSON.parse(localStorage.getItem("mycart")|| null);
 console.log(items)
 var bool=false;
 try{
    for (const i in items) {
     if (items[i].product.id==id){
     bool=true;}
    }
    if (bool==false){
      const newItems = JSON.stringify([...items,{product: data, nbr: 1,taille:taille,color:color}])
      localStorage.setItem("mycart",newItems);
    }
   }
   catch (err){
     console.log(err)
   }
   console.log(items)
    console.log(bool);
    console.log(color);
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
      <button onClick={(e)=>SetSize("XS")} id={bxs} className="Box">XS</button>
      <button onClick={(e)=>SetSize("S")} id={bs} className="Box">S</button>
        <button onClick={(e)=>SetSize("L")} id={bl} className="Box">L</button>
        <button onClick={(e)=>SetSize("XL")} id={bxl} className="Box">XL</button>
      </div>
      <div className="Size">color:</div>
      <div className="ColBox">
        <button className="ColorBox1" id={gris} onClick={(e)=>{setButtonColor('gris')}}></button>
        <button className="ColorBox2" id={black} onClick={(e)=>{setButtonColor('black')}}></button>
        <button className="ColorBox3" id={green} onClick={(e)=>{setButtonColor('green')}}></button>
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