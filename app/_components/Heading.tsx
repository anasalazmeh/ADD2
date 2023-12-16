import Image from 'next/image'
import React from 'react'
import background from'../../public/azau.jpg'
import image from'../../public/aa.png'
const Heading = () => {
  return (
    <div className='relative h-full flex-col md:flex-row py-10 flex justify-center items-center gap-28'>
      <Image src={background} alt='' className='absolute w-full h-full bg-cover left-0 top-0 -z-10'/>
      <div className='text-center text-black p-2'>
        <h1 className='font-bold text-xl my-2'>PACKAGING IS</h1>
        <h1 className='font-bold text-xl my-2'>A SILENT MARKETING TOOL.</h1>
        <p> Send us inquiry now for special discounts.</p>
        <button className='Green rounded-full text-white p-2 w-56 mt-8'>LET&prime;S PACK</button>
      </div>
      <div>
        <Image src={image} alt='' className='w-80 p-2'/>
      </div>
    </div>
  )
}

export default Heading