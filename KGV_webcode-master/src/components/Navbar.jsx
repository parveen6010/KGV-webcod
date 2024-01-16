import React from 'react'
import { Book } from './Book'
import { Link } from 'react-router-dom'
import logo from '../resource/logokgv.jpg'
import { Button2 } from './Button2'


export const Navbar = () => {
  return (
   <div className='h-[4.5rem] py-2 sticky top-0 z-50  items-center   w-full bg-black '>

   <div className='flex justify-between max-w-[1240px] w-11/12 mx-auto '>
   <div ><Link to={"/"}><img src={logo} className='w-[60px] h-[60px]'/></Link></div>
   <div className='flex font-inter gap-14 text-lg text-white items-center'>
       <Link to={"/"} >Home</Link>
       <Link to={"/product"}>Product</Link>
       <Link to={"/booking"}>Booking</Link>
       <Link to={"/contactUs"}>Contact Us</Link>
   </div>
   <div className='flex justify-center items-center gap-2'>      
   <Book/>
   <Button2/>
   </div>
  
   </div>

   {/* <div className='max-w-[1240px] mt-[15px] w-11/12 mx-auto rounded-md bg-[#57E226]  h-[1px] '></div> */}



</div> 
    
  )
}
