"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './secondpage.module.css';
import DashedLineWithImage from './Elephant';
import { secondPageContent } from '../Constants/pinkcity/second-page';

const SecondPage = () => {
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
          mandala.classList.add(styles['scale-up']);
        },
        onLeaveBack: () => {
          mandala.classList.remove(styles['scale-up']);
          void mandala.offsetWidth; // Trigger a reflow
          mandala.classList.add(styles['scale-up']);
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 mt-10">
      <DashedLineWithImage />

      <div className="relative w-full  flex items-center">
        <div className="flex-1 relative right-5 -top-52 bg-purple-200">
          <div className="absolute inset-0 flex justify-center items-center w-[40rem] h-[87vh] md:[h-45vh] md:w-[45vw] xl:top-3 -ml-24 md:-top-20">
            <Image
              src={secondPageContent.mandalaImg}
              alt="Mandala Design"
              height={600}
              width={600}
              ref={mandalaRef}
              className="object-contain h-[150%] w-[150%] "
            />
          </div>
          <div className="absolute z-10 w-[30vw] h-[30vh]  max:w-[26vw] max:h-[26vh] xl:left-14 mt-28 ">
            <Image
              src={secondPageContent.topImg}
              alt="Jaipur"
              layout="responsive"
              width={600}
              height={400}
              className="shadow-lg rounded-xl w-full object-cover"
              style={{ aspectRatio: '2 / 2' }}  // Ensure aspect ratio is maintained
            />
          </div>
        </div>

        <div className="flex-1 relative top-20 right-16 h-full">
          <div className="absolute inset-0 flex justify-end items-start h-full w-[40rem]">
            <Image
              src={secondPageContent.strokeImg}
              alt="Stroke"
              layout="fill"
              objectFit="cover"
              className="object-contain opacity-40"
            />
          </div>

          <div className="relative z-10 top-8">
            <p className="text-gray-700 text-lg p-20 font-montserrat">
              {secondPageContent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
