"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/about/carousel";

const NewSustainability: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, img: '/assets/about/sustain/20.svg', title: 'Carbon Emission Control', description: 'At Nessco India, our commitment to sustainable manufacturing practices is at the core of our operations. We employ cutting-edge technologies and processes that prioritize energy efficiency and waste reduction.' },
    { id: 1, img: '/assets/about/sustain/21.svg', title: 'Energy Efficiency', description: 'At Nessco India, our commitment to sustainable manufacturing practices is at the core of our operations.' },
    { id: 2, img: '/assets/about/sustain/22.svg', title: 'Waste Reduction', description: 'At Nessco India, our commitment to sustainable manufacturing practices is at the core of our operations. We employ cutting-edge technologies and processes that prioritize energy efficiency and waste reduction.' },
    { id: 3, img: '/assets/about/sustain/23.svg', title: 'Water Conservation', description: 'At Nessco India, our commitment to sustainable manufacturing practices is at the core of our operations. We employ cutting-edge technologies and processes that prioritize energy efficiency and waste reduction.' },
    { id: 4, img: '/assets/about/sustain/24.svg', title: 'Green Manufacturing', description: 'At Nessco India, our commitment to sustainable manufacturing practices is at the core of our operations. We employ cutting-edge technologies and processes that prioritize energy efficiency and waste reduction.' },
  ];

  const handleHover = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full p-8 bg-white h-[90vh] overflow-hidden">
      <h2 className="text-5xl font-bold text-[#3a2a79] mb-8 top-[10] font-poppins">
        Sustainability
      </h2>

      <Carousel className="w-full max-w-screen-sm">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className={currentSlide === index ? "block" : "hidden"}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-5">
                    <div className="flex flex-col mb-[20rem] mr-10">
                      <h3 className="text-3xl font-poppins font-bold text-left">
                        {slide.title}
                      </h3>
                      <div className="flex items-center justify-center space-x-20 relative left-5 top-10 mt-11">
                        <div className="flex-shrink-0">
                          <img
                            src={slide.img}
                            alt={`Slide ${index + 1} Icon`}
                            className="w-32 h-32 object-cover mb-2"
                          />
                        </div>
                        <p className="text-sm font-semi-medium w-[21rem] font-poppins mb-3 relative">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Circle Images */}
      <div className="absolute right-16 top-[20vh]">
        <div className="border-4 border-gray-300 w-[25vw] h-[50vh] rounded-full">
          {/* Image 1 */}
          <div
            className="bg-white relative w-20 h-20 top-[31vh] right-[2vw] rounded-full "
            onMouseEnter={() => handleHover(0)}
          >
            <Image
              src="/assets/about/sustain/20.svg"
              alt="icon"
              width={70}
              height={70}
              className="opacity-50  hover:opacity-100 hover:scale-90 transition-transform duration-300"
            />
          </div>

          {/* Image 2 */}
          <div
            className="relative w-20 h-20 bg-white rounded-full -top-[8vh] right-[2vw] "
            onMouseEnter={() => handleHover(1)}
          >
            <Image
              src="/assets/about/sustain/21.svg"
              alt="icon"
              width={70}
              height={70}
              className="opacity-50  hover:opacity-100 hover:scale-90 transition-transform duration-300"
            />
          </div>

          {/* Image 3 */}
          <div
            className="relative w-20 h-20 left-[16vw] -top-[28vh] bg-white rounded-full "
            onMouseEnter={() => handleHover(2)}
          >
            <Image
              src="/assets/about/sustain/22.svg"
              alt="icon"
              width={70}
              height={70}
              className="opacity-50  hover:opacity-100 hover:scale-90 transition-transform duration-300"
            />
          </div>

          {/* Image 4 */}
          <div
            className="relative w-20 h-20 left-[22vw] -top-[19vh] bg-white rounded-full "
            onMouseEnter={() => handleHover(3)}
          >
            <Image
              src="/assets/about/sustain/23.svg"
              alt="icon"
              width={70}
              height={70}
              className="opacity-50  hover:opacity-100 hover:scale-90 transition-transform duration-300"
            />
          </div>

          {/* Image 5 */}
          <div
            className="relative w-20 h-20 -top-[10vh] left-[10vw] bg-white rounded-full  "
            onMouseEnter={() => handleHover(4)}
          >
            <Image
              src="/assets/about/sustain/24.svg"
              alt="icon"
              width={70}
              height={70}
              className="opacity-50  hover:opacity-100 hover:scale-90 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSustainability;
