import Image from "next/image";
import React from "react";
import zero from "../../public/zero.png";
const ZeroWaste = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center my-5">
      <Image src={zero} alt="" className="text-center w-40 md:w-60" />
      <p className="text-sm">
        add2add concern the most on giving back to our nature and environment.<br/>
        We offer all kinds of eco-friendly packaging such as Recyclable,<br/>
        Reusable, Compostable, and etc.
      </p>
    </div>
  );
};

export default ZeroWaste;
