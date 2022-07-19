import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './static/Header';
import ProductDetails from './Components/productdetails/ProductDetails';
import Products from './Components/ListProduct/Products';
import ProductCard from './Components/ListProduct/ProductCard';
import Cart from './Components/cart/Cart';
import Test from './Components/ListProduct/test';

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
                                          <Route path ="/test/:id" element={<Test/>} />
        
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
