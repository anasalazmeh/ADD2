import React from "react";
import CardHeading from "./CardHeading";
import logo from '../../public/azam.png'
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="bg-gray-200 px-5 lg:px-32 py-10">
        <div className="text-center my-5">
          <p>SPECIAL DISCOUNTS FOR EVERY PURCHASE</p>
          <p className="text-Green">Free Quotations by add2add team :)</p>
        </div>
        <CardHeading />
      </div>
      <div className="flex flex-col justify-center items-center my-16">
        <Image src={logo} alt="" className=" w-36"/>
        <p className="md:text-2xl my-2">Packaging is a Silent Marketing Tool.</p>
      </div>
    </>
  );
};

export default page;
