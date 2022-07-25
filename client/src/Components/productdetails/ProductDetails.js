import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./prodDetail.css";
import { getDetailProd } from "./prodDetApi";
export default function ProductDetails() {
  const { id } = useParams();

  var currency = localStorage.getItem('currency');

  const [sizes,setSizes] = useState([])
  const [instock,setInstock] = useState([])
  

  
  
  const  test = ()=> {
   
  //   var mycart=[];
  //    mycart.push(localStorage.getItem('mycart') || null);
  //    var newcart=JSON.stringify({
  //     id: id,
  //     nbr: 1,
  //     taille:"xl"
  // })
  const items = JSON.parse(localStorage.getItem("mycart")|| null);
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
  }
  
   
    
    const [data,setData]=useState();
    const [img,setImg] = useState([])
    useEffect(()=>{
      const fetchData = async () => {
        const result = await getDetailProd(id);
        setData(result);
        

        setSizes(result.attributes.map((it=>(it.items)[0].value)))
        setImg((result?.gallery.map((item,i)=>(item))))
        if(!result?.inStock){
          setInstock(false)
        }
        console.log("result?.inStock")
        console.log(instock)
      };
      fetchData();     
    }, []);    

    if(sizes)
    {console.log(sizes);}



const SetSize = (val,i) =>{
sizes[i]=(val)
setSizes([...sizes])
    
}
const ImgDisplay = (i,e) =>{
    var x=img[0];
    img[0]=img[i];
    img[i]=x;
      setImg([...img]);
      e.preventdefault();
  }
  
  return (<>
    {data?(
    <div className="Product-container cartt" >
      <div >
    <div className="itheb ">
      <div className="image-containerr" style={{  visibility: img[1]==null ? "hidden":"visible"}}><img onClick={(e)=>ImgDisplay(1,e)} src={img[1]} alt=""/></div>
      <div className="image-containerr" style={{  visibility: img[2]==null ? "hidden":"visible"}}><img onClick={(e)=>ImgDisplay(2,e)} src={img[2]} alt=""/></div>
      <div className="image-containerr" style={{  visibility: img[3]==null ? "hidden":"visible"}}><img onClick={(e)=>ImgDisplay(3,e)} src={img[3]} alt=""/></div>
      <div className="image-containerr" style={{  visibility: img[4]==null ? "hidden":"visible"}}><img onClick={(e)=>ImgDisplay(4,e)} src={img[4]} alt=""/></div>
    </div>
    <div className="image-container-Big itheb"><img className="b_img" src={img[0]} alt=""/></div></div>
    <div className="Product-container-details">
    
    <div >
      <div className="titlee">{data.brand}</div>
      <div className="Soustitle">{data.name}</div>
      <div >
        
      {data.attributes.map((attribute,i)=>(<><div   className='Size'>{attribute.name}:</div>
              <div className="SizeBox" >
              {attribute.items.map((attribute_item,ii)=>{ 
                if (attribute.name.toLowerCase().trim()=="color") {
                 return <button onClick={(e)=>{SetSize(attribute_item.value,i); }} 
        style={{background: attribute_item.value,border: sizes[i]==attribute_item.value ? "2px solid rgba(94, 206, 123, 1)":"1px solid rgb(0,0,0)" }} className ="ColorBox1"></button>
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
      <div className="txtOutStock" hidden={instock}>OUT OF STOCK!</div>
      <button className="button" hidden={!instock}  onClick={test}   >ADD TO CART</button>
      
      <div dangerouslySetInnerHTML={{__html: data.description}} className="textDet"></div>
      </div>
    </div>
    </div>
  ):(<div>Not Accecible</div>)}
  </>
  )
}