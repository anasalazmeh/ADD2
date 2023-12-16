import React from 'react'
import { datacard } from '../data'
import CardProduct from './CardProduct'

const Products = () => {
  return (
    <div className='flex gap-12 flex-wrap px-5 md:px-56 my-5'>
      {datacard.map((data,index)=>(
        <div className='flex-grow basis-80' key={index}>
          <CardProduct  data={data} />
        </div>
      ))}
    </div>
  )
}

export default Products