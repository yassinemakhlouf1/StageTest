import React, { useState } from 'react';
import "./Header.css";
export default function Header() {
  const [selected, setSelected] = useState('€');
  // const handleChange = (event: SelectChangeEvent) => {
  //   setSelected(event.target.value);
  // };
  return (
   
  
  <>
      <div className='app-head'>
        <div>
        <a class="active"  href='' >Women</a>
        <a href='' id='p1'>Man</a>
        <a href='' id='p1'>kids</a>
        </div>
        
        <div>
       <img src="/Greenicon.png" alt="" />
        </div>
        <div >
          <div>{selected}</div>
          <select onChange={(e)=>setSelected(e.target.value[0])} value={'None'} className="selectH">

            <option  value="None"></option>
            <option  value="$"><em>$ USD</em></option>
            <option value="€" selected>€ EUR</option>
            <option value="¥"  >¥ JPY</option>
        </select>
        <img src="/Vector.png" alt=""/>
        </div>
      </div>
  
    </>

  )
}
