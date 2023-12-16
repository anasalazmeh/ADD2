import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface Product{
  title:string,
  description:string,
  image:StaticImageData
  Switch?:boolean
}
interface Props{
  data:Product
}
const CardProduct = ({data}:Props) => {
  return (
    <div className='bg-gray-200 flex justify-between p-4 rounded-lg h-36'>
      <div className={`${data.Switch && 'order-2'}`}>
        <Image src={data.image} alt='' className='w-full h-full hover:scale-90 transition-all'/>
      </div>
      <div className='text-center w-1/2'>
        <p className='text-black font-bold'>{data.title}</p>
        <p className='text-sm text-gray-400 mt-2'>{data.description}</p>
        <button className={`Green text-white px-4 py-2 mt-5 rounded-full text-xs md:text-base hover:opacity-80 transition-all`}>Show Now</button>
      </div>
    </div>
  )
}

export default CardProduct