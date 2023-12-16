import React from 'react'
import { Icon1, Icon2 } from '../data'
import Image from 'next/image'

const Icons = () => {

  return (
    <div className='my-6'>
      <h1 className='md:text-3xl text-center font-bold my-4 text-black'>CLIENTS SERVED</h1>
      <div className='flex justify-center items-center space-x-2'>
        {Icon1.map((item,index)=><Image src={item} alt='icon' key={index} className='w-12 md:w-36'/>)}
      </div>
      <div className='flex justify-center items-center space-x-2'>
        {Icon2.map((item,index)=><Image src={item} alt='icon' key={index} className='w-12 md:w-36'/>)}
      </div>
    </div>
  )
}

export default Icons