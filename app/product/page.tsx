import Image from "next/image";
import React from "react";
import p1 from'../../public/p1.png'
import p3 from'../../public/p3.png'
import p4 from'../../public/p4.png'
import p5 from'../../public/p5.png'
import p6 from'../../public/p6.png'
import p7 from'../../public/p7.png'
import CardProduct from "./CardProduct";
import Form from "./Form";
const ProductPage = () => {
  const image=[p1,p3,p4,p5,p6,p7]
  return (
    <>
    <p className="flex justify-center mx-2 text-sm items-center my-24 md:text-2xl">ALL PACKAGING BY ADD2ADD FOR ADD2ADD CLIENTS</p>
    <div className="grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-32 my-10 gap-4 justify-center items-center">
      {image.map((item,index)=>(
        <CardProduct className="justify-center" key={index} image={item}/>
      ))}
    </div>
     <Form/>
    </>
  );
};

export default ProductPage;
