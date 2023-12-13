import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
const CardHeading = ({ image }: { image: StaticImageData | string }) => {
  const imagestyle={
    width:'100%',
    hight:'100%'
  }
  return (
    <div className="card lg:card-side bg-base-100 h-fit shadow-xl">
      <figure className="w-1/2">
        <Image src={image} alt="" className="w-full h-full"/>
      </figure>
      <div className="card-body ">
        <h6 className="text-xs text-Green font-bold my-2">PRODUCT DETAIL</h6>
        <h1 className="text-xl text-gray-500">Zip Lock Stand Up Bags</h1>
        <h6 className="text-xs text-gray-500 my-2">
          Custom Materials such as Plastic stand up bag, Stand
        </h6>
        <h6 className="text-xs text-gray-500 my-2">
          up paper bags, or Stand up zipper bags. Custom Size, Colors, Designs,
          And ETC.
        </h6>
        <h1 className="m-0  p-0 mt-3 font-bold text-gray-500">
          <span className="text-Green">Size:</span> Custom Size
        </h1>
        <span className="w-full h-px bg-gray-400 mt-5 mb-2"/>
        <h1 className="m-0 p-0  mt-3 font-bold text-gray-500">
          <span className="text-Green">Category:</span> Packaging
        </h1>
        <span className="w-full h-px bg-gray-400 mt-5 mb-2"/>
        <h1 className="m-0  p-0 mt-3 font-bold text-gray-500">
          <span className="text-Green">MOQ:</span>10K pcs
        </h1>
        <span className="w-full h-px bg-gray-400 mt-5 mb-2"/>
        <h1 className="m-0  p-0 mt-3 font-bold text-gray-500 flex items-center">
          <span className="text-Green">Share on: </span><span className="text-2xl flex space-x-1 ml-2"><FaFacebook/><BsWhatsapp/></span>
        </h1>
        <div>
        <button className="btn rounded-md mt-3 Green hover:text-black transition-all text-white">SEND INQUIRY</button>
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
