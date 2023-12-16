import { dataIamges2 } from "../data";
import Carousel from "./Carousel";

const Carousel2 = () => {
  return (
    <div className="text-center text-black my-4">
      <div className="text-center">
        <p>
          <span className="font-bold">add2add </span>X{" "}
          <span className="text-Green">CREME</span>
        </p>
        <p>add2add in Corporations with CREME.</p>
      </div>
      <Carousel data={dataIamges2} title={'carousel2'}/>
      <button className="w-48 md:w-72 text-sm md:text-lg text-white rounded-full p-1 Green hover:opacity-90 text-center">
        CHECK OUT CREME
      </button>
    </div>
  );
};

export default Carousel2;
