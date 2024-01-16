import React from 'react'
import { Book } from './Book'
import { Button2 } from './Button2'
import logo from "../resource/logokgv.jpg"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
    <div className='w-11/12 max-w-[1240px]   flex justify-between'>
    <div ><Link to={"/"}><img src={logo} className='w-[60px] h-[60px]'/></Link></div>
          <div className='flex justify-center items-center  gap-10 h-28 mb-8 ' >
             {/* col1 */}
              <div className='text-white '>
                <div className='font-semibold  '>Home</div>
                <Link to="/booking" ><div>Book Now</div></Link>
                <Link to="/contactUs">Get In Touch</Link>
              
                
                
              </div>

              {/* col2 */}
              <div className='text-white '>
              <div className='font-semibold   '>Product</div>
                <Link to={"/product"}><div>Featured Product</div></Link>
                <Link to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}>News Stories</Link>
              </div>

              {/* col 3 */}
              <div className='text-white '>
                <div className='font-semibold  '>Company</div>
                <Link to={"/"}>About us</Link>
                <div>Careers</div>
              </div>

              {/* col4 -> buttons*/}
              <div className='flex-col items-center justify-center  gap-10 '>
                <Button2/>
              </div>
          </div>
    </div>
    <div className='w-full rounded-md bg-[#57E226] h-[1px] '></div>

    </div>
  )
}
