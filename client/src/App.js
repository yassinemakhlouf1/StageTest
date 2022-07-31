import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './static/Header';
import ProductDetails from './Components/productdetails/ProductDetails';
import Products from './Components/ListProduct/Products';
import ProductCard from './Components/ListProduct/ProductCard';
import Cart from './Components/cart/Cart';
import Test from './Components/cart/test';
import Test2 from './Components/cart/test2';
import Test3 from './Components/productdetails/test';


function App() {
  return (
  <>
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route path="/Product/:id" element={<ProductDetails/>}/>

        

      <Route path ="/" element={<Products/>} />
      <Route path ="/:id" element={<Products/>} />
      <Route path ="/cart" element={<Cart/>} />
      <Route path ="/test" element={<Test/>} />
      <Route path ="/test/:id" element={<Test/>}/>
      <Route path ="/test" element={<Test/>} />
      <Route path ="/test2" element={<Test2/>} />
      <Route path ="/test3/:id" element={<Test3/>} />


        
        </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
function Layout() {
  return (
    <>
       <Header /> 
      <div >
        <Outlet />
      </div>
    </>
  );
}
export default App;
