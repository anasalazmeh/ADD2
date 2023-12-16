import CardProduct from "./_components/CardProduct";
import Carousel1 from "./_components/Carousel1";
import Carousel2 from "./_components/Carousel2";
import Carousel3 from "./_components/Carousel3";
import Heading from "./_components/Heading";
import Star from "./_components/Star";
import ZeroWaste from "./_components/ZeroWaste";
import img from '../public/p1.png'
import Products from "./_components/Products";
import Icons from "./_components/Icons";
import Product2 from "./_components/Product2";
export default function Home() {
  return (
    <>
      <Heading />
      <h1 className="text-center text-Green my-4 text-xl font-bold">
        OUR RECENT PROJECTS
      </h1>
      <Carousel1 />
      <Carousel2/>
      <ZeroWaste/>
      <Star/>
      <Carousel3/>
      <Products/>
      <Icons/>
      <Product2/>
    </>
  );
}
