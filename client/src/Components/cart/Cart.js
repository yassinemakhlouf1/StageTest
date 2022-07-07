import React, { useState } from 'react';
import "./style.css";
export default function Cart() {
  const [count, setCount] = useState(1);
var left= '<';
var right='>';

  return (
    <div className='cart-container'>    <div className='cart'>Cart</div>
    <hr/>
    <div >
 
    <div className='cart-container-detail'>
    <div className="DetailProdc">
      <div className="titleeC" >Appolo</div>
      <div className="SoustitleC">Running Short</div>
      <div className="priceC">$50.00</div>
      <div className="SizeC">Size:</div>
      <div className="SizeBoxC">
        <div className="BoxC">XS</div>
        <div className="BoxC">S</div>
        <div className="BoxC">L</div>
        <div className="BoxC">XL</div>
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
      <button className='buttonC' onClick={() => setCount(count + 1)}>+</button>
      <p className='pCart'>{count}</p>
      <button className='buttonC ' onClick={() => {if (count>0 ) setCount(count - 1)}}>-</button>
    </div>
    <div className="image-containerC">
      <img src="/ProductGhaith.png" alt=""/>
      <button className='btn'> {left} </button>
      <button className='btn1'> {right} </button>
      </div>
    
    </div>
    </div><hr/>
    
    </div>
    <div >
    
    <div className='cart-container-detail'>
    <div className="DetailProdc">
      <div className="titleeC" >Appolo</div>
      <div className="SoustitleC">Running Short</div>
      <div className="priceC">$50.00</div>
      <div className="SizeC">Size:</div>
      <div className="SizeBoxC">
        <div className="BoxC">XS</div>
        <div className="BoxC">S</div>
        <div className="BoxC">L</div>
        <div className="BoxC">XL</div>
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
      <div><button className='buttonC' onClick={() => setCount(count + 1)}>+</button>
      <p className='pCart'>{count}</p>
      <button className='buttonC' onClick={() => {if (count>0 ) setCount(count - 1)}}>-</button></div>
    </div>
    <div className="image-containerC">
      <img src="/ProductGhaith.png" alt=""/>
      <button className='btn'> {left} </button>
      <button className='btn1'> {right} </button>
      </div>
    
    </div>
    </div><hr/>
    
    </div>
    <div className='total'>
    <div className='aa'>
    <div className='txt1'>Tax 21%:</div>
    <div className='txt1'>Quantity:</div>
    <div className='txt1'>Total:</div>
    </div>
    <div className='aa'>
    <div className='txt'>$42.00 </div>
    <div className='txt'>3</div>
    <div className='txt'>$2000</div>
    </div>
    </div>
    <button className='button'>ORDER</button>
    </div>
  )
}
