import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './static/Header';
import ProductDetails from './Components/productdetails/ProductDetails';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route path="/Products/test" element={<ProductDetails/>}/>
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
