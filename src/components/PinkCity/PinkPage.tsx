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
        <div className=" flex flex-col justify-center items-center relative mt-10 h-full z-20 p-4 md:p-16 w-2/4 ">
          <div className="absolute inset-0 flex justify-center items-start w-full top-10">
            <Image
              src={pinkPageContent.strokeImg}
              alt="Stroke"
              layout="fill"
            
              className="object-contain opacity-35 " 
            />
          </div>
          <div className="relative z-10 text-justify top-3">
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
        <div className="flex-1 flex justify-center items-center relative h-[90vh]">
          <div className="absolute inset-0 flex justify-center items-center w-[45vw] h-[45vw]  ml-12 ">
            <Image
              src={pinkPageContent.mandalaImg}
              alt="Mandala Design"
              ref={mandalaRef}
              layout="fill"
              objectFit="cover"
              className="object-contain z-10 " style={{marginTop:'-1%'}}
            />
           <div className="relative w-[24vw] h-[24vw] right-7 top-2">
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
    </div>
  );
};

export default PinkPage;
