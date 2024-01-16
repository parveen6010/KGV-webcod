import React from 'react'
import { Link } from 'react-router-dom'

export const Button2 = () => {
  return (
    <div >
        <Link to={"/contactUs"}>
            <div class="mx-auto flex   items-center justify-center">
                <div class=" h-12 w-full rounded-md bg-[#57E226] p-[2px] ">
                <div class=" px-5 py-2 rounded-md h-full w-full bg-black text-white font-inter  ">
                  Contact Us
                 </div>
                </div>
            </div>
        </Link>
    </div>
  )
}
