import React from "react";
import Carousel from "./Carousel";
import { dataIamges2 } from "../data";

const Carousel3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-4">
      <div className="w-full md:w-1/2 "><Carousel data={dataIamges2} title="Carousel3" /></div>
      <div className="md:text-3xl text-center space-y-2">
        <p>PREMIUM QUALITY</p><p> COATED CUSTOM</p><p> PRINTED</p>
        <p className="text-orange-900">KRAFT PAPER CUPS</p>
      </div>
    </div>
  );
};

export default Carousel3;
