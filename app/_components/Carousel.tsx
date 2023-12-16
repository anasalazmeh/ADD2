import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  data: { image1: StaticImageData; image2: StaticImageData }[];
  title:string
}
const Carousel = ({ data,title }: Props) => {
  return (
    <div className=" py-2 flex justify-center h-full flex-col items-center">
      <div className="carousel w-10/12">
        {data.map((data, index) => (
          <div
            id={`${title}-${index + 1}`}
            className="carousel-item w-full m-2 h-full  flex justify-center"
            key={index}
          >
            <Image src={data.image1} alt="" className="w-1/2 m-2 " />
            <Image src={data.image2} alt="" className="w-1/2 m-2 " />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data.map((data, index) => (
          <a href={`#${title}-${index + 1}`} className="btn btn-xs" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
