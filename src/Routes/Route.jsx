import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Auth/Signin"
import Signup from "../pages/Auth/Signup"
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";







const MainRoute=()=>{
    return(
    
    <>
    <Routes>
      <Route  path="/"  element={<Home/>}  />
     <Route path="/register" element={<Signup />} />
     <Route path="/login" element={<Signin />} />
     <Route path="/productdetails" element={<ProductDetails/>}/>
    
    
     </Routes>
    </>



    )
}

export default MainRoute