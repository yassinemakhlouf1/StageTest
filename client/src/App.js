import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './static/Header';
import ProductDetails from './Components/productdetails/ProductDetails';
import Products from './Components/ListProduct/Products';
import Cart from './Components/cart/Cart';
import {CartProvider} from "./context/Context"



function App() {
  return (
  <>
  <CartProvider>
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route path="/Product/:id" element={<ProductDetails/>}/>

        

      <Route path ="/" element={<Products/>} />
      <Route path ="/:id" element={<Products/>} />
      <Route path ="/cart" element={<Cart/>} />


        
        </Route>
          
        </Routes>
      </BrowserRouter>
      </CartProvider>
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
