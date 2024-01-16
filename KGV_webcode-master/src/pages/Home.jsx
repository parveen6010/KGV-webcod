import React from 'react'
import logo from "../resource/kgvLogo.png"
import bike from "../resource/bike_main.png"
import { Footer } from '../components/Footer'
import wave from "../resource/wave_final.png"
import goldenwave from "../resource/golden_wave.png"
import { Book } from '../components/Book'
import { Button2 } from '../components/Button2'
import { keyBenefits } from '../Data/KeyBenefits'
import { BenefitCard } from '../components/BenefitCard'
import bikeleft from "../resource/bike_left.jpeg"
import bikeright from "../resource/bike_right.jpeg"
import bikeback from "../resource/bike_back.jpeg"
import biketop from "../resource/bike_top.jpeg"
import news from "../resource/news_clipping.jpeg"
import { Link } from 'react-router-dom'
import { BusinessBook } from '../components/BusinessBook'
import qrcode from "../resource/qr.png"

export const Home = () => {
  return (
    <div className='w-full   overflow-x-hidden overflow-y-auto    '>
    {/* hero page */}
    <div className='w-11/12 mx-auto max-w-[1204px]     h-screen flex relative wrapper  justify-center items-center  '>
       
       <img src={bike} className='absolute   scale-125  bottom-[15%]  ' />
       <div className='uppercase  font-extrabold text-transparent  text-[17rem] tracking-widest  bg-clip-text  bg-gradient-to-r from-[#55E422] via-[#53E320] to-[#55E422] bg-opacity-20 text_properties'>ENERGY</div>
       <div className='absolute top-[20%] text-4xl font-extrabold uppercase  '>Welcome to the world of smart E-MOBILITY solution </div>
    </div>

    <div className='w-full h-screen flex flex-col    justify-center relative items-center   z-10 '>
    <img src={wave} className='w-full absolute h-full top-0 -z-10'/>
    <div className='flex flex-col  justify-center rounded-lg h-[50%] bg-opacity-10 p-8       w-[80%] min-w-[300px] items-center  gap-y-5 bg-black   '>
      <div className='text-4xl font-bold text-center    '>About us </div>
      <div className='text-center max-w-[50%] text-2xl '>
      KGV is a smart e-mobility solution provider
that aims to cater to the society as it
reduces the immense burden on the middle
and lower segment of the community by
reducing the cost of commuting by more
than 90%. </div>
      <div className='flex  justify-center items-center gap-2'>
        <Book/>
        <Button2/>
      </div>
    </div>
    
   
    </div>

    <div className='w-full h-screen flex flex-col pt-[5rem] justify-center items-center bg-[#3EC70B] '>
      <div className='font-bold text-3xl mb-4 text-black '>
       Key Benefits
      </div>
      <div className='grid grid-rows-2 h-[70%] pb-5    grid-flow-col gap-10  mx-auto max-w-[1204px] w-11/12       '>
        {keyBenefits.map((benefits,index)=>{
          return <BenefitCard key={index} passed={benefits}/>
          
        })}
      </div>

    </div>
    {/* We started from the bike, and we’ll make its delivery shortly to all the commuters worldwide.

Our team of engineering excellence is also working on bringing up the system to each and every mode of transportation including 3-wheelers, cars, LMVs, LCVs, and even HCVs.
 */}
  
  <div className='max-w-[1204px] w-11/12 mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col justify-center items-center '>
  <div className='text-2xl font-bold uppercase mt-5 '> Vison </div>
  <div> We started from the bike and we’ll make its delivery shortly to</div>
  <div> all the commuters worldwide.</div>
  <div>Our team of engineering excellence is also working on bringing up the system to each and every mode of transportation</div>
  <div>including 3-wheelers, cars, LMVs, LCVs, and even HCVs.</div>

  <div className='text-2xl font-bold uppercase mt-5 '> Mission </div>
  <div>To empower every common man in the world to save his/her hard earned moneyspent on fossil fuels</div>
  <div>To save mother Earth from air and noise pollutionas well as a green and cleaner environment for saving life and humanity</div>
  <div>To ensure trouble free and tension free drive to each and every rider reducing the anxiety of being stuckanywhere in the middle of his/her journey</div>
  <div>To reduce the traveling cost of companies, corporate and enterprizes by more than 90% and add to their profits</div>
  <div>Our plug-in hybrid was designed to get to the battery fit our and can be charged inside the home</div>
  </div>

{/* gallery  */}
  <div className='w-full h-screen bg-black relative z-10 pb-7 '>
  <img src={goldenwave} className='w-full h-full  absolute -z-10'/>
  <div className='max-w-[1204px] w-11/12 mx-auto pt-20 h-full   grid grid-cols-2 grid-rows-2'>
    <div className='text-yellow-500   text-5xl  font-extrabold '> #KGVPhotoWall </div>
    <div className='bg-white   w-[85%] h-[95%] rounded-md '>
      <img src={bikeleft} className=' w-[95%] h-[90%] mx-auto mt-1  '/>
    </div>

    <div className='bg-white   w-[85%] h-[95%] rounded-md '>
      <img src={bikeright} className=' w-[95%] h-[90%] mx-auto mt-1  '/>
    </div>

    <div className='bg-white   w-[85%] h-[100%] rounded-md '>
      <img src={biketop} className=' w-[95%] h-[90%] mx-auto mt-1  '/>
    </div>
  </div>
  </div>

  <BusinessBook/>

  <div className='w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center '>
  <div className='uppercase text-3xl font-semibold pb-6'> Our Recent achievements...</div>
  <Link className='flex justify-center items-center hover:scale-110 transition-all duration-500' to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}  > 
   <img src={news} className='w-[70%]  border-black border-2'/>
 </Link>
  </div>

  <div className='h-[1000px] w-full bg-white'>
    <div className='h-[200px] w-[400px] ml-4 justify-between rounded-lg border-2 p-5    flex  items-center  ' >
      <div className='font-bold '>GR Number : 87938  </div>
      
      <div >
       <div>
        <img src={qrcode} className='w-[100px] h-[100px]'/>
       </div> 

        <div className='font-bold text-center'> 12412
        </div>
      
      </div>

      
    </div>
  </div>
    </div>
  )
}
