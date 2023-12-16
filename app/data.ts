import { StaticImageData } from "next/image";
import p1 from "../public/p1.png";
import p3 from "../public/p3.png";
import p4 from "../public/p4.png";
import p5 from "../public/p5.png";
import p6 from "../public/p6.png";
import p7 from "../public/p7.png";
import p8 from "../public/p8.png";
export const Images = [p1, p3, p4, p5, p6, p7, p8];

import img1 from "../public/slider1.png";
import img2 from "../public/slider2.png";
import img3 from "../public/slider4.png";
import img4 from "../public/slider3.png";
export const dataIamges1: {
  image1: StaticImageData;
  image2: StaticImageData;
}[] = [
  { image1: img1, image2: img2 },
  { image1: img3, image2: img4 },
];

import img5 from "../public/slider5.png";
import img6 from "../public/slider6.png";
import img7 from "../public/slider7.png";
import img8 from "../public/slider8.png";

export const dataIamges2: {
  image1: StaticImageData;
  image2: StaticImageData;
}[] = [
  { image1: img5, image2: img6 },
  { image1: img7, image2: img8 },
];
import pro1 from "../public/img-items1.png";
import pro2 from "../public/img-items2.png";
import pro3 from "../public/img-items3.png";
import pro4 from "../public/img-items4.png";
import pro5 from "../public/img-items5.png";
import pro6 from "../public/img-items6.png";
export const datacard: {
  title: string;
  description: string;
  image: StaticImageData;
  Switch?: boolean;
}[] = [
  { title: "Plastic Cups", description: "PET & Eco-Friendly", image: pro2 },
  {
    title: "Paper Cups",
    description: "Food Grade & No Odor",
    image: pro1,
    Switch: true,
  },
  { title: "Glass Bottles", description: "Non-chemical & Food Safe", image: pro4 },
  {
    title: "Ice Cream Cup",
    description: "Food Grade & Custom Lid",
    image: pro3,
    Switch: true,
  },
  { title: "Cake Box", description: "Anti-Grease & Food Grade", image: pro6},
  {
    title: "Paper Bag",
    description: "Kraft / White / Color",
    image: pro5,
    Switch: true,
  },
];


import image1 from '../public/1.jpg'
import image2 from '../public/2.jpg'
import image3 from '../public/3.jpg'
import image4 from '../public/4.jpg'
import image5 from '../public/5.jpg'
import image6 from '../public/6.jpg'
import image7 from '../public/7.jpg'
import image8 from '../public/8.jpg'
import image9 from '../public/9.jpg'
import image10 from '../public/10.jpg'
import image11 from '../public/11.jpg'

export const Icon1=[image1,image2,image3,image4,image5]
export const Icon2=[image6,image7,image8,image9,image10,image11]


import prod1 from '../public/coffe.png'
import prod2 from '../public/packaing.png'
import prod3 from '../public/glass.png'

export const prod=[
  {image:prod1,textButton:'Coffee Box'},
  {image:prod2,textButton:'Packaing'},
  {image:prod3,textButton:'GlassButtons'}
]