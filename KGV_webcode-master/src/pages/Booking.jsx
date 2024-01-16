// import { useState } from "react"
// import React from 'react'
// import wave from "../resource/wave_final.png"
// import { BusinessBook } from "../components/BusinessBook"
// import { ContactCompany } from "../components/ContactCompany"
// import axios from "axios"

//  export const Booking=()=> {
  

//   // student or instructor

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     query:""
//   })



//   const { firstName, lastName, email, address, query } = formData

//   // Handle input fields, when some value changes
//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const postReq=async (formData)=>{
//     const res = await axios.post('http://localhost:4000/query', 
//       {formData}  );
//   }
//   // Handle Form Submission
//   const handleOnSubmit =  (e) => {
//     e.preventDefault();
// console.log(formData)
//     postReq(formData);
//     // Reset
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       address: "",
//       query: "",
//     })
    
//   }



//   return (
//     <div className="w-full overflow-hidden    relative  ">
//          <img src={wave} className="absolute -z-10 " />

//     <div className="flex-col  items-center  mx-auto max-w-[1204px] w-11/12">

     
//     <div class="flex   items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-[90%]  mx-auto mt-14  px-20  ">
//          {/* Form */}
//       <form onSubmit={handleOnSubmit} className="flex flex-col h-full  gap-y-4 w-full  font-inter  ">
//         <div className="flex w-full justify-center gap-9    ">
//             <div className="flex flex-col">

//               <div className="flex gap-x-4">
//               <label>
//                 <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
//                   First Name <sup className="text-pink-200">*</sup>
//                 </p>
//                 <input
//                   required
//                   type="text"
//                   name="firstName"
//                   value={firstName}
//                   onChange={handleOnChange}
//                   placeholder="Enter first name"
//                   style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem]   p-[12px]  "
//                 />
//               </label>
//               <label>
//                 <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                   Last Name <sup className="text-pink-200">*</sup>
//                 </p>
//                 <input
//                   required
//                   type="text"
//                   name="lastName"
//                   value={lastName}
//                   onChange={handleOnChange}
//                   placeholder="Enter last name"
//                   style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem]  p-[12px]  "
//                 />
//               </label>
//             </div>
//             <label className="w-full">
//               <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                 Email Address <sup className="text-pink-200">*</sup>
//               </p>
//               <input
//                 required
//                 type="text"
//                 name="email"
//                 value={email}
//                 onChange={handleOnChange}
//                 placeholder="Enter email address"
//                 style={{
//                   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                 }}
//                 className="w-full rounded-[0.5rem]  p-[12px] "
//               />
//             </label>

//               <label className="relative">
//                 <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                 Address<sup className="text-pink-200">*</sup>
//                 </p>
//                 <input
//                   required
//                   type="text"
//                   name="address"
//                   value={address}
//                   onChange={handleOnChange}
//                   placeholder="Enter address"
//                   style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem]   p-[12px] pr-10 "
//                 />
//               </label>

//             </div>

//             <div className=" h-full ">
//             <label className=" h-full">
//                 <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                   Query <sup className="text-pink-200">*</sup>
//                 </p>
//                 <textarea
//                   required
//                   type="text"
//                   name="query"
//                   value={query}
//                   onChange={handleOnChange}
//                   placeholder="Enter query"
//                   style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full h-48      rounded-[0.5rem]  p-[12px]  text-black"
//                 />
                
//               </label>

//             </div>
//         </div>
//        <div className="flex items-center justify-center "> <button
//           type="submit"
//           className="mt-6  rounded-[8px] bg-[#3EC70B] p-1 py-[8px] px-[12px] font-medium text-black"
//           onClick={handleOnSubmit}     
//         >
//           Book your kit  Now 
//         </button></div>
       
//       </form>
        
//     </div>
//    </div>
// <div className="mt-14 " > 

// <BusinessBook/>
// </div>

//   <ContactCompany/>
   

//     </div>
      
    
//   )
// }







import { useState } from "react"
import React from 'react'
import axios from "axios";
import Card from "./Card.jsx"


 export const Booking=()=> {
  

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
        "address": "Razorpay Corporate Office"
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

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()
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
    < Card amount={1} img= {"./apple-touch-icon.png"} checkoutHandler ={checkoutHandler} />

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
              name="lastName"
              value={lastName}
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
              Query <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="query"
              value={query}
              onChange={handleOnChange}
              placeholder="Enter query"
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
          Book your kit 
        </button>
      </form>
        </div>
    </div>
</div>

   

    </div>
      
    </div>
  )
}


// import { useState } from "react"
// import React from 'react'
// import axios from "axios";
// import Card from "./Card.jsx"


//  export const Booking=()=> {
  

//   // student or instructor

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     query:""
//   })



//   const { firstName, lastName, email, address, query } = formData

//   // Handle input fields, when some value changes


//   const checkoutHandler = async (amount) => {

//      const {data:{key}} = await axios.get("http://localhost:5000/api/getkey")
//     const { data:{order}} = await axios.post("http://localhost:5000/api/checkout", {amount
//     })

//   const options = {
//     key,
//     amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: "XXXXXXXXXXX",
//     description: "Test Transaction",
//     image: "",
//     order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     callback_url: "http://localhost:5000/api/paymentverification",
//     prefill: {
//         name: "Gaurav Kumar",
//         email: "gaurav.kumar@example.com",
//         contact: "9000090000"
//     },
//     notes: {
//         "address": "Razorpay Corporate Office"
//     },
//     theme: {
//         "color": "#3399cc"
//     }
// };

//   const razor  = new window.Razorpay(options);
//   razor.open();
  
//   }
  
//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   // Handle Form Submission
//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//     // Reset
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     })
    
//   }



//   return (
//     <div className="w-full overflow-hidden   h-screen bg-black  ">
    
//     <div className=" flex-col  items-center mx-auto max-w-[1240px] w-11/12">

//     <h1 className=' text-5xl font-inter text-[#3EC70B] font-bold pt-16  
//     text-transparent  bg-clip-text bg-gradient-to-r
//      from-[#6beb03] to-[#e6f604]'>
//      Be the first one to ride the future with KGV!!</h1>
     
//     <div class="flex  items-center justify-center rounded-lg font-inter max-w-[420px]  mx-auto mt-14 ">
//      <div class="  w-full rounded-md bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d] p-1 ">
//         <div class=" px-5 py-2 flex flex-col h-full w-full bg-white  font-inter  ">
//          {/* Form */}
//     <form onSubmit={handleOnSubmit} className="flex h-full  flex-col gap-y-4 font-inter  ">
//     < Card amount={5000} img= {"./apple-touch-icon.png"} checkoutHandler ={checkoutHandler} />

//         <div className="flex gap-x-4">   
//           <label>
//             <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
//               First Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="firstName"
//               value={firstName}
//               onChange={handleOnChange}
//               placeholder="Enter first name"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-black  p-[12px] text-white "
//             />
//           </label>
//           <label>
//             <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Last Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="lastName"
//               value={lastName}
//               onChange={handleOnChange}
//               placeholder="Enter last name"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-black p-[12px] text-white "
//             />
//           </label>
//         </div>
//         <label className="w-full">
//           <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//             Email Address <sup className="text-pink-200">*</sup>
//           </p>
//           <input
//             required
//             type="text"
//             name="email"
//             value={email}
//             onChange={handleOnChange}
//             placeholder="Enter email address"
//             style={{
//               boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//             }}
//             className="w-full rounded-[0.5rem] bg-black p-[12px] text-white"
//           />
//         </label>
//         <div className="flex gap-x-4">
//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//              Address<sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="address"
//               value={address}
//               onChange={handleOnChange}
//               placeholder="Enter address"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-black  p-[12px] pr-10 text-white"
//             />
//           </label>
//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//               Query <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="query"
//               value={query}
//               onChange={handleOnChange}
//               placeholder="Enter query"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-black p-[12px] pr-10 text-white"
//             />
            
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="mt-6 rounded-[8px] bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d] p-1 py-[8px] px-[12px] font-medium text-black"
//           onClick={handleOnSubmit}     
//         >
//           Book your kit 
//         </button>
//       </form>
//         </div>
//     </div>
// </div>

   

//     </div>
      
//     </div>
//   )
// }