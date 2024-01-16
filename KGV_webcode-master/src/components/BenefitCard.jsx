import React from 'react'

export const BenefitCard = ({passed}) => {
  return (
    <div className=' p-6 pt-4  flex flex-col   hover:text-white  h-full w-full   rounded-lg hover:scale-110 transition-all duration-500     '>
        <div className='font-bold text-xl pb-2   '>{passed.heading } </div>
        <div>{passed.paragraph}</div>
    </div>
  )
}
