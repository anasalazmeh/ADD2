import { Images } from "@/app/data";
import Image from "next/image";
import React from "react";
import CardHeading from "./CardHeading";
import Cardimage from "./Cardimage";
import Link from "next/link";
const ProductDelaitPage = ({ params }: { params: { id: string } }) => {
  const image =
    Images.find((item, index) => index == parseInt(params.id) - 1) || "";
  const SectionFirst = Images.filter((item, index) => index <= 3) || "";
  const SectionSecand = Images.filter((item, index) => index >= 3) || "";
  return (
    <>
      <div className="bg-gray-200 px-10 lg:px-32 py-10">
        <CardHeading image={image} />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-32 my-9 gap-5">
        {SectionFirst.map((item, index) => (
          <Image key={index} src={item} alt="" className="rounded-xl" />
        ))}
      </div>
      <h1 className=" w-full h-px bg-gray-500 "></h1>
      <div className="flex flex-col items-center px-10 lg:px-32">
        <h1 className=" mt-4">Related Item</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-9 gap-5">
          {SectionSecand.map((item, index) => (
            <Cardimage key={index} image={item} />
          ))}
        </div>
        
        <Link href={'/product'}><button className="btn rounded-md mt-3 Green hover:text-black transition-all text-white">BACT TO ALL</button></Link>
      </div>
    </>
  );
};

export default ProductDelaitPage;
