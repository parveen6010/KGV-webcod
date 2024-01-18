
import { useState } from "react"
import React from 'react'
import axios from "axios";
import Card from "./Card.jsx"


 export const Booking=()=> {
  

  // student or instructor

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phonenumber:""
  })

  const { firstname, lastname, email, address, phonenumber } = formData

  // Handle input fields, when some value changes


  // Handle Form Submission
  const handleOnSubmit = async (e) => {
    if(!firstname, !lastname, !email, !address, !phonenumber)  return;
    e.preventDefault()

    try {
      const  response =  await axios.post("http://localhost:5000/vistuser" ,{
      firstname,
      lastname,
      email,
      address,
      phonenumber
   }
);
   
if (response.status === 200) {
  console.log("booking detail submitted successfully!");
} else {
  console.error("Failed to submit booking detail.");
}

    } catch (error) {
      console.error("Error submitting booking detail:", error);
    }
   
    // Reset
    // setFormData({
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   address: "",
    //   phonenumber: "",
    // })
  }

  const checkoutHandler = async (amount) => {

     const {data:{key}} = await axios.get("http://localhost:5000/api/getkey")
    const { data:{order}} = await axios.post("http://localhost:5000/api/checkout", {amount
    })

  const options = {
    key,
    amount: order.amount, 
    currency: "INR",
    name: "XXXXXXXXXXX",
    description: "Test Transaction",
    image: "",
    order_id: order.id, 
    callback_url: "http://localhost:5000/api/paymentverification",
    notes: {
      "email": email,
      "firstname" :firstname,
       "lastname": lastname,
        "email":email, 
       "address":address,
      "phonenumber" : phonenumber

  },
  
    theme: {
        "color": "#3399cc"
    }
};

  const razor  = new window.Razorpay(options);
  
  razor.on('payment.failed', function (response){
  alert(response.error.code);
  alert(response.error.description); 
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.eetadata.order_10);
   alert(response.error.metadata.payment_id);
  });

  // document.getElementById('rzp-button1").onclick = function(e){
      razor.open();
  // e.preventDefault();
    // } 
  }
  

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


  return (
    <div className="w-full overflow-hidden   h-screen bg-black  ">
    
    <div className=" flex-col  items-center mx-auto max-w-[1240px] w-11/12">

    <h1 className=' text-5xl font-inter text-[#3EC70B] font-bold pt-16  
    text-transparent  bg-clip-text bg-gradient-to-r
     from-[#6beb03] to-[#e6f604]'>
     Be the first one to ride the future with KGV!!</h1>
     
    <div class="flex  items-center justify-center rounded-lg font-inter max-w-[420px]  mx-auto mt-14 ">
     <div class="  w-full rounded-md bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d] p-1 ">
        <div class=" px-5 py-2 flex flex-col h-full w-full bg-white  font-inter  ">
         {/* Form */}
    <form onSubmit={handleOnSubmit} className="flex h-full  flex-col gap-y-4 font-inter  ">
   

        <div className="flex gap-x-4">   
          <label>
            <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black  p-[12px] text-white "
            />
          </label>
          <label>
            <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black p-[12px] text-white "
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-black p-[12px] text-white"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
             Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="address"
              value={address}
              onChange={handleOnChange}
              placeholder="Enter address"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black  p-[12px] pr-10 text-white"
            />
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
              Phone <sup className="text-pink-200">*</sup>
            </p>
              <input
              required
                 type="text"
              name="phonenumber"  
             value={phonenumber}
             onChange={handleOnChange}
             placeholder="Phone number"
  style={{
    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
  }}
  className="w-full rounded-[0.5rem] bg-black p-[12px] pr-10 text-white"
/>

            
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d] p-1 py-[8px] px-[12px] font-medium text-black"
          onClick={handleOnSubmit}     
        >
      < Card amount={100} checkoutHandler ={checkoutHandler} />
        </button>
      </form>
        </div>
    </div>
</div>

   

    </div>
      
    </div>
  )
}

