import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { ContactUs } from "./pages/ContactUs";
import { Product } from "./pages/Product";
import { Footer } from "./components/Footer";
const App = () => {
  
  return(
    <div className="relative overflow-x-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    
    </div>
  )
};

export default App;
