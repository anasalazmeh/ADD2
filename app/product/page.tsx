import Image from "next/image";
import React from "react";

import CardProduct from "./CardProduct";
import Form from "./Form";
import Link from "next/link";
import { Images } from "../data";
const ProductPage = () => {
  const image=Images
  return (
    <>
    <p className="flex justify-center mx-2 text-sm items-center my-24 md:text-2xl">ALL PACKAGING BY ADD2ADD FOR ADD2ADD CLIENTS</p>
    <div className="grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-32 my-10 gap-5 justify-center items-center">
      {image.map((item,index)=>(
        <Link href={`/product/${index+1}`} key={index}><CardProduct className="justify-center"  image={item}/></Link> 
      ))}
    </div>
     <Form/>
    </>
  );
};

export default ProductPage;
