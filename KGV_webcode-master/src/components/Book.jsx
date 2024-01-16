import React from 'react'
import { Link } from 'react-router-dom'

export const Book = () => {
  return (
    <div >
        <Link to={"/booking"}>
            <div className=' py-3 px-5 rounded-md bg-[#57E226] font-inter font-semibold '>Know More</div>
        </Link>
    </div>
  )
}
