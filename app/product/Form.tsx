import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const Form = () => {
  return (
    <div className="card md:w-1/3  bg-base-100 m-auto ">
      <figure className="text-green-400 text-6xl">
       <BsWhatsapp/>
      </figure>
      <div className="card-body flex flex-col justify-center items-center">
        <h2 className="card-title text-center">LET’S CHAT & GET DISCOUNT CODE!</h2>
        <form className="space-y-3">
          <input className="border w-full outline-none p-2 rounded-lg bg-gray-200" type="email" name="email" id="email" placeholder="Your email" />
          <input className="border w-full outline-none p-2 rounded-lg bg-gray-200" type="email" name="email" id="email" placeholder="Your email" />
          <input className="border w-full outline-none p-2 rounded-lg bg-gray-200" type="email" name="email" id="email" placeholder="Your email" />
        </form>
        <div className="card-actions justify-end">
          <button className="btn rounded-full mt-3 Green px-7 text-white">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
