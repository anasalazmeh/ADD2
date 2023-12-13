import Image, { StaticImageData } from 'next/image'
import React from 'react'

const Cardimage = ({ image }: { image: StaticImageData | string }) => {
  return (
    <div className="card  bg-base-100 shadow-xl border hover:scale-105 transition-all">
  <figure><Image src={image} alt=''/></figure>
  <div className="card-body text-center p-2 ">
      <p>4oz Double-Wall Espresso Paper Cups with Black Lids</p>
  </div>
</div>
  )
}

export default Cardimage