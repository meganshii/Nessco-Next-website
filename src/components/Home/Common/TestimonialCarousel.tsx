"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import machine from "../../../../public/assets/HomeKnowmore3.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { GlobeDemo } from "../GlobeDemo";

const testimonials = [
  {
    name: "Customer 1",
    country: "India",
    imageSrc: machine,
    feedback: "Great service and support.",
    rating: 5,
    flagSrc: "https://flagcdn.com/in.svg", // External SVG flag URL
  },
  {
    name: "Customer 2",
    country: "USA",
    imageSrc: machine,
    feedback: "Highly recommend their products.",
    rating: 4,
    flagSrc: "https://flagcdn.com/us.svg",
  },
  {
    name: "Customer 3",
    country: "Canada",
    imageSrc: machine,
    feedback: "Excellent quality!",
    rating: 5,
    flagSrc: "https://flagcdn.com/ca.svg",
  },
  {
    name: "Customer 4",
    country: "Brazil",
    imageSrc: machine,
    feedback: "Very satisfied with my purchase.",
    rating: 4,
    flagSrc: "https://flagcdn.com/br.svg",
  },
  {
    name: "Customer 5",
    country: "Australia",
    imageSrc: machine,
    feedback: "Great customer service.",
    rating: 5,
    flagSrc: "https://flagcdn.com/au.svg",
  },
  {
    name: "Customer 6",
    country: "Germany",
    imageSrc: machine,
    feedback: "Highly recommend!",
    rating: 4,
    flagSrc: "https://flagcdn.com/de.svg",
  },
  {
    name: "Customer 7",
    country: "Japan",
    imageSrc: machine,
    feedback: "Fantastic experience.",
    rating: 5,
    flagSrc: "https://flagcdn.com/jp.svg",
  },
  {
    name: "Customer 8",
    country: "France",
    imageSrc: machine,
    feedback: "Quality products.",
    rating: 4,
    flagSrc: "https://flagcdn.com/fr.svg",
  },
  {
    name: "Customer 9",
    country: "UK",
    imageSrc: machine,
    feedback: "Great value for money.",
    rating: 5,
    flagSrc: "https://flagcdn.com/gb.svg",
  },
  {
    name: "Customer 10",
    country: "South Africa",
    imageSrc: machine,
    feedback: "Excellent support.",
    rating: 4,
    flagSrc: "https://flagcdn.com/za.svg",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative w-full max-w-sm">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform ease-in-out duration-300"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  current === index ? "bg-blue-500" : "bg-neutral-400"
                }`}
              ></button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 p-2 mt-2 bg-white rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="flex items-center gap-2 p-1 border rounded-full hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <Image
                  src={testimonial.flagSrc}
                  alt={testimonial.country}
                  height={100}
                  width={100}
                  className="w-6 h-6"
                />
                <span className="font-medium">{testimonial.country}</span>
                <FaExternalLinkAlt className="text-gray-500" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[90%] p-0 flex flex-col justify-center items-center">
        <div className="flex justify-between w-full mt-0">
          <span className="font-bold text-2xl font-montserrat">
            What our <span className="text-[#422f94]">Customers</span> say
          </span>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="flex flex-col">
            <div className="text-[#422f94] text-center">1000+</div>
            <div className="font-montserrat text-2xl">Satisfied customers</div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center mt-0">
          <GlobeDemo/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
