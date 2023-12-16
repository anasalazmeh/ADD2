import React from "react";
import { prod } from "../data";
import Card from "./Card";

const Product2 = () => {
  return (
    <div className="text-center my-10">
      <h1 className="md:text-3xl my-5">FOOD GRADE QUALITY ONLY BY add2add</h1>
      <div className="flex flex-col md:flex-row text-center gap-5 px-12 md:px-40">
        {prod.map((data,index) => (
          <Card image={data.image} textButton={data.textButton} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Product2;
