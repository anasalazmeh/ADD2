import React from "react";
import image from "../../public/db.jpeg";
import Image from "next/image";
const CardHeading = () => {
  return (
    <div className="card lg:card-side bg-base-100 h-fit shadow-xl">
      <figure className="md:w-1/2">
        <Image src={image} alt="" className="w-full h-full" />
      </figure>
      <div className="card-body ">
        <div className="flex flex-col  md:flex-row mt-5">
          <div className="flex flex-col space-y-2  m-2">
            <label htmlFor="NAME">NAME</label>
            <input
              type="text"
              name="NAME"
              id="NAME"
              placeholder="YOUR NAME"
              className="border outline-none p-2"
            />
          </div>
          <div className="flex flex-col space-y-2 m-2">
            <label htmlFor="NUMBER">NUMBER</label>
            <input
              type="text"
              name="NUMBER"
              id="NUMBER"
              placeholder="YOUR NUMBER"
              className="border outline-none p-2"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2 m-2 md:mb-4">
          <label htmlFor="MESSAGE">MESSAGE</label>
          <textarea
            name="MESSAGE"
            id="MESSAGE"
            placeholder="Your item,Quantity,Or Ask Us Anuthing :) "
            className="border outline-none p-2 min-h-full max-h-48 mb-2"
          />
        </div>
        <div className="flex flex-col space-y-2  m-2 md:mt-6">
          <label htmlFor="NAME">EMAIL</label>
          <input
            type="text"
            name="NAME"
            id="NAME"
            placeholder="Your email"
            className="border outline-none p-2"
          />
        </div>
        <div className="flex flex-col space-y-2  m-2 ">
          <label htmlFor="NAME">COUNTRY</label>
          <input
            type="text"
            name="NAME"
            id="NAME"
            placeholder="Your country"
            className="border outline-none p-2 mb-0"
          />
          <span className=" text-sm ">*You can upload your reference here. (Optional)</span>
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <input type="file" name="file" id="file"  className="w-28 m-0 p-0" />
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <button type="submit" className="p-3 Green text-white rounded-3xl px-16 hover:bg-gray-200 hover:text-black transition-all">Send</button>
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
