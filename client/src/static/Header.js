import React, { useState } from 'react';
import Cart from '../Components/cart/Cart';
import "./Header.css";
export default function Header() {
  const [selected, setSelected] = useState('€');
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
          <select onChange={(e)=>setSelected(e.target.value[0])} value={'None'} className="selectH">

            <option  value="None"></option>
            <option  value="$">$ USD</option>
            <option value="€" >€ EUR</option>
            <option value="¥"  >¥ JPY</option>
        </select>
        <img src="/Vector.png" alt=""/>
        </div>
      </div>
  {/* <div className='cart-div'><Cart/></div> */}
  
    </>

  )
}
