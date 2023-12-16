import Image from 'next/image'
import React from 'react'
import star from '../../public/star.gif'
const Star = () => {
  return (
    <div className='flex flex-col justify-start items-center my-5'>
      <Image src={star} alt='' className='w-12 my-4'/>
      <p className='md:text-3xl my-1 font-bold text-gray-400'>add2add TESTIMONIALS</p>
      <p className='md:text-2xl my-1 font-bold text-Green'>BELOVED CUSTOMERS</p>
    </div>
  )
}

export default Star