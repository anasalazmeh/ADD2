import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface Props{
  image:StaticImageData,
  textButton:string
}
const Card = ({image,textButton}:Props) => {
  return (
    <div className='flex flex-col border rounded-lg py-5 justify-center items-center'>
      <Image src={image} alt='product' className='w-1/2'/>
      <button className='Green text-center text-sm text-white rounded-full py-2 w-32'>{textButton}</button>
    </div>
  )
}

export default Card