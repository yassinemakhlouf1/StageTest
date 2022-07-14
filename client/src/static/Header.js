import React, { useEffect, useState } from 'react';
import Cart from '../Components/cart/Cart';
import "./Header.css";
export default function Header() {
  const [currency,Setcurrency]=useState('$');
  const [mycart, setMyCarte] = useState([]);
  const [selected, setSelected] = useState();
  const  updateCurrancy = (cur)=>{
    setsymbole(cur);
    localStorage.setItem('currency',cur);

  }
  const  setsymbole = (val)=> {
    setSelected(val);
   
    console.log(selected);
  }
  useEffect(()=>  {if((!localStorage.getItem('mycart')&& !localStorage.getItem('currency'))){
    localStorage.setItem('currency',currency);
    localStorage.setItem('mycart',mycart);
  } else {
    console.log('aa');
    console.log(localStorage.getItem('currency'));
    setMyCarte(localStorage.getItem('mycart'));
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
        <a className="active"  href='' >Women</a>
        <a href='' id='p1'>Man</a>
        <a href='' id='p1'>kids</a>
        </div>
        
        <div className='divH'>
       <img src="/Greenicon.png" alt="" />
        </div>
        <div className='divH mr-0'>
          <div className='divH '>{selected}</div>
          <select onChange={(e)=>updateCurrancy(e.target.value)} value={'None'} className="selectH">

            <option  value="None"></option>
            <option  value="$">USD</option>
            <option value="£" >GBP</option>
            <option value="A$"  >AUD</option>
            <option value="¥"  >JPY</option>
            <option value="₽"  >RUB</option>
        </select>
        <img src="/Vector.png" alt=""/>
        </div>
      </div>
  {/* <div className='cart-div'><Cart/></div> */}
  
    </>

  )
}
