import React, { useEffect, useState } from 'react';
import Cart from '../Components/cart/Cart';
import "./Header.css";
export default function Header() {
  const [currency,Setcurrency]=useState('$');
  // const [mycart, setMyCarte] = useState([]);
  var mycart=[];
  const [selected, setSelected] = useState('$');
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('p1');
  const [link3, setLink3] = useState('p1');


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
  } else {
    console.log('aa');
    console.log(localStorage.getItem('currency'));
    Setcurrency(localStorage.getItem('currency'));
    console.log(currency);

    setSelected(currency);
  }
  },[])
  // const handleChange = (event: SelectChangeEvent) => {
  //   setSelected(event.target.value);
  // };
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
            <option value="¥"  >JPY</option>
            <option value="₽"  >RUB</option>
        </select><a href='/cart'>
        <img src="/Vector.png" alt=""/></a>
        </div>
      </div>
  {/* <div className='cart-div'><Cart/></div> */}
  
    </>

  )
}
