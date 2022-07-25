import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./prodDetail.css";
import { getDetailProd } from "./prodDetApi";
export default function ProductDetails() {
  const { id } = useParams();

  var currency = localStorage.getItem('currency');

  const [sizes,setSizes] = useState([])
  


  
  
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
      const newItems = JSON.stringify([...items,{product: data, nbr: 1,attribute:sizes}])
      localStorage.setItem("mycart",newItems);
    }
   }
   catch (err){
     console.log(err)
   }
   console.log(items)
    console.log(bool);
  }
  
   
    
    const [data,setData]=useState();
    
    useEffect(()=>{
      const fetchData = async () => {
        const result = await getDetailProd(id);
        setData(result);
        

        setSizes(result.attributes.map((it=>(it.items)[0].value)))
        
        
      };
      fetchData();     
    }, []);    
    
    console.log('data');
    if(sizes)
    {console.log(sizes);}



const SetSize = (val,i) =>{
sizes[i]=(val)
setSizes([...sizes])
    
}

  return (<>
    {data?(
    <div className="Product-container cartt" >
      <div >
    <div className="itheb ">
      <div className="image-containerr" style={{  visibility: data.gallery[1]==null ? "hidden":"visible"}}><img src={data.gallery[1]} alt=""/></div>
      <div className="image-containerr" style={{  visibility: data.gallery[2]==null ? "hidden":"visible"}}><img src={data.gallery[2]} alt=""/></div>
      <div className="image-containerr" style={{  visibility: data.gallery[3]==null ? "hidden":"visible"}}><img src={data.gallery[3]} alt=""/></div>
    </div>
    <div className="image-container-Big itheb"><img className="b_img" src={data.gallery[0]} alt=""/></div></div>
    <div className="Product-container-details">
    
    <div >
      <div className="titlee">{data.brand}</div>
      <div className="Soustitle">{data.name}</div>
      <div >
        
      {data.attributes.map((attribute,i)=>(<><div className='Size'>{attribute.name}:</div>
              <div className="SizeBox" >
              {attribute.items.map((attribute_item,ii)=>{ 
                if (attribute.name.toLowerCase().trim()=="color") {
                 return <button onClick={(e)=>{SetSize(attribute_item.value,i); }} 
        style={{background: attribute_item.value}} className ="ColorBox1"></button>
      }else{
        return <button  onClick={(e)=>{SetSize(attribute_item.value,i);}} 
        style={{background: sizes[i]==attribute_item.value ? "black" : "white", color: sizes[i]==attribute_item.value ? "white":"black"}} className="Box">{attribute_item.value}</button>
                        }
                     
                      })}
        {console.log(attribute.name.toLowerCase().trim())}
                </div></>

        ))}
      </div>
      <div className="Size" >Price:</div>
      <div className="pricee">{currency}{data.prices.map((p) => (() => {if(p.currency.symbol===currency){return(p.amount)}})())}</div>
      <button className="button" onClick={test}  >ADD TO CART</button>
      <div dangerouslySetInnerHTML={{__html: data.description}} className="textDet"></div>
      </div>
    </div>
    </div>
  ):(<div>Not Accecible</div>)}
  </>
  )
}