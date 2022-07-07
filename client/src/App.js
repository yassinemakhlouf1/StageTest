import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './static/Header';
import ProductDetails from './Components/productdetails/ProductDetails';
import Products from './Components/ListProduct/Products';
import ProductCard from './Components/ListProduct/ProductCard';
import Cart from './Components/cart/Cart';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route path="/Products/test" element={<ProductDetails/>}/>

          
          <Route path ="/" element={<><ProductCard title={"Appollo Running Short"} imageUrl="https://dictionary.cambridge.org/fr/images/thumb/Tshirt_noun_001_18267_2.jpg?version=5.0.245" price={"50.00$"} /></>} />
                                          <Route path ="/products" element={<Products/>} />
                                          <Route path ="/cart" element={<Cart/>} />
        
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
