import React from 'react'
import Image, { StaticImageData } from 'next/image'
const CardProduct = ({image ,className}:{image:StaticImageData,className:string}) => {
  return (
    <div className={`card card-compact w-full justify-center items-center bg-white shadow-md ${className}`}>
    <figure >
      <Image src={image} width={1000} alt=""/>
    </figure>
    <div className="card-body">
      <p>Custom Premium Color Changing Plastic Cups</p>
    </div>
  </div>
  )
}

export default CardProduct