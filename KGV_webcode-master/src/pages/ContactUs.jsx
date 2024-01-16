import { useState } from "react"
import React from 'react'
import wave from "../resource/wave_final.png"
import { BusinessBook } from "../components/BusinessBook"
import { ContactCompany } from "../components/ContactCompany"



 export const ContactUs=()=> {
  
  

  // student or instructor

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    query:""
  })



  const { firstName, lastName, email, address, query } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // mailer();

    
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    
  }



  return (
    <div className="w-full overflow-hidden    relative  ">
         <img src={wave} className="absolute -z-10 " />

    <div className="flex-col  items-center  mx-auto max-w-[1204px] w-11/12">

     
    <div class="flex   items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-[90%]  mx-auto mt-14  px-20  ">
         {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex flex-col h-full  gap-y-4 w-full  font-inter  ">
        <div className="flex w-full justify-center gap-9    ">
            <div className="flex flex-col">

              <div className="flex gap-x-4">
              <label>
                <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
                  First Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleOnChange}
                  placeholder="Enter first name"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem]   p-[12px]  "
                />
              </label>
              <label>
                <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Last Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleOnChange}
                  placeholder="Enter last name"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem]  p-[12px]  "
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
                className="w-full rounded-[0.5rem]  p-[12px] "
              />
            </label>

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
                  className="w-full rounded-[0.5rem]   p-[12px] pr-10 "
                />
              </label>

            </div>

            <div className=" h-full ">
            <label className=" h-full">
                <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                  Query <sup className="text-pink-200">*</sup>
                </p>
                <textarea
                  required
                  type="text"
                  name="query"
                  value={query}
                  onChange={handleOnChange}
                  placeholder="Enter query"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full h-48      rounded-[0.5rem]  p-[12px]  text-black"
                />
                
              </label>

            </div>
        </div>
       <div className="flex items-center justify-center "> <button
          type="submit"
          className="mt-6  rounded-[8px] bg-[#3EC70B] p-1 py-[8px] px-[12px] font-medium text-black"
          onClick={handleOnSubmit}     
        >
          Raise a Query
        </button></div>
       
      </form>
        
    </div>
   </div>
<div className="mt-14 " > 

<BusinessBook/>
</div>

  <ContactCompany/>
   

    </div>
      
    
  )
}

