import { Caramel } from "next/font/google";
import React from "react";
import { dataIamges1 } from "../data";
import Carousel from "./Carousel";

const Carousel1 = () => {
  return (
    <div className="text-center text-black my-4">
      <div className="text-center">
        <p>
          <span className="font-bold">add2add </span>X{" "}
          <span className="text-pink-300">CREME</span>
        </p>
        <p>add2add in Corporations with CREME.</p>
      </div>
      <Carousel data={dataIamges1} title={'carousel1'} />
      <button className="w-48 md:w-72 text-sm md:text-lg text-white rounded-full p-1 bg-pink-400 hover:bg-pink-300 text-center">
        CHECK OUT CREME
      </button>
    </div>
  );
};

export default Carousel1;
