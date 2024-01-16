import React, { useState } from "react";
  import { Navbar } from "./components/Navbar";
  import { Route, Routes } from "react-router-dom";
  import { Home } from "./pages/Home";
  import { Booking } from "./pages/Booking";
  import { ContactUs } from "./pages/ContactUs";
  import PaymentSuccess from "./pages/paymentSuccess";
  const App = () => {
    
    return(
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/paymentsuccess" element={< PaymentSuccess />}   />
      </Routes>
      
      </div>
    )
  };

  export default App;