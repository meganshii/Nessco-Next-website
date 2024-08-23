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
      <div className="relative flex flex-1 mt-28 h-full">

  <div className="absolute inset-0 flex justify-center items-center w-[40rem] h-[87vh] md:h-[50vh] md:w-[50vw] xl:top-6 -ml-24 md:-top-24">
    <Image
      src={secondPageContent.mandalaImg}
      alt="Mandala Design"
      height={600}
      width={600}
      ref={mandalaRef}
      className="object-contain h-[160%] w-[160%]"
    />
  </div>


  <div className="relative flex justify-center items-center w-[30vw] h-[30vh] xl:left-16 ">
    <div className="absolute z-10 w-full h-full max-w-[26vw] max-h-[26vh]">
      <Image
        src={secondPageContent.topImg}
        alt="Jaipur"
        layout="responsive"
        width={600}
        height={400}
        className="shadow-lg rounded-xl object-cover"
        style={{ aspectRatio: '2 / 2' }}  // Adjust aspect ratio if needed
      />
    </div>
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
