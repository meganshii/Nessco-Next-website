import React from "react";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";
import Carousel from "./Common/Carousel";
const HomeTestimonial: React.FC = () => {
  return (
    <div className="flex flex-row py-4 h-screen z-20 max-w-7xl mx-auto relative  overflow-hidden">
      {/* left component */}
      <div className="px-2 w-1/3 flex flex-col">
        <h6 className="text-3xl text-red-500 ml-6 lg:text-2xl font-montserrat lg:leading-tight font-bold">
          Testimonials
        </h6>
        <h2 className="text-5xl font-bold ml-4 mt-28">Don't Just Take</h2>
        <h2 className="text-5xl font-bold ml-4 mt-6">
          Our
          <span className="relative ml-1 px-5 ">
            <span className="absolute rounded-2xl inset-0 bg-gradient-to-r from-[#ffffff] to-[#8d7d9b] -z-10" />
            <span className="relative text-black">Word for it</span>
          </span>
        </h2>
        <h4 className="text-center">Read what our clients have to say</h4>
        <Carousel/>
      </div>
      {/* right component */}
      <div className="w-2/3 relative h-full">
        <ParallaxScrollDemo />
      </div>
    </div>
  );
};

export default HomeTestimonial;