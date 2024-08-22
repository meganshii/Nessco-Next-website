// components/PinkPage.tsx
"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './secondpage.module.css';
import DashedLineWithImage from './Elephant';
import Bird from './Bird';
import { pinkPageContent } from '../Constants/pinkcity/Pink-page';

const PinkPage = () => {
  const mandalaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mandala = mandalaRef.current;

    if (mandala) {
      ScrollTrigger.create({
        trigger: mandala,
        start: 'top 80%',
        end: 'top 20%',
        onEnter: () => {
          mandala.classList.add(styles['scales-up']);
        },
        onLeaveBack: () => {
          mandala.classList.remove(styles['scales-up']);
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 mt-32 w-screen relative">
      {pinkPageContent.birdComponent && <Bird />}
      
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center relative top-16 h-full z-20 p-4 md:p-16">
          <div className="absolute inset-0 flex justify-center items-start">
            <Image
              src={pinkPageContent.strokeImg}
              alt="Stroke"
              layout="fill"
              objectFit="cover"
              className="object-contain opacity-35"
            />
          </div>
          <div className="relative z-10 text-justify">
            <p className="text-gray-700 text-md font-montserrat">
              {pinkPageContent.description.split(' ').map((word, index) => (
                word === 'ivory' || word === 'machines' ? (
                  <span key={index} className="text-[#bd6165]">{word} </span>
                ) : (
                  `${word} `
                )
              ))}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center relative h-[60vh] md:h-[80vh] lg:h-[92vh]">
          <div className="absolute inset-0 flex justify-center items-center w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw]">
            <Image
              src={pinkPageContent.mandalaImg}
              alt="Mandala Design"
              ref={mandalaRef}
              layout="fill"
              objectFit="cover"
              className="object-contain z-10"
            />
          </div>
          <div className="relative w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] lg:w-[27vw] lg:h-[27vw] top-10 md:right-3">
            <Image
              src={pinkPageContent.hawamahalImg}
              alt="Jaipur"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinkPage;
