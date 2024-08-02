import React from "react";
import TestimonialCarousel from "./Common/TestimonialCarousel";
const HomeTestimonial: React.FC = () => {
  return (
    <div className="relative z-20 py-8 lg:py-16 max-w-7xl mx-auto">
      <div className="px-2 text-center">
        <h4 className="text-3xl lg:text-5xl font-montserrat lg:leading-tight font-bold text-black dark:text-white">
          Testimonials
        </h4>
      </div>
      <div className="relative mt-8 ">
        <div className="w-full p-6">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
