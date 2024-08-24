"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./secondpage.module.css";
import DashedLineWithImage from "./Elephant";
import { secondPageContent } from "../Constants/pinkcity/second-page";

const SecondPage = () => {
  const mandalaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mandala = mandalaRef.current;

    if (mandala) {
      ScrollTrigger.create({
        trigger: mandala,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          mandala.classList.add(styles["scale-up"]);
        },
        onLeaveBack: () => {
          mandala.classList.remove(styles["scale-up"]);
          void mandala.offsetWidth; // Trigger a reflow
          mandala.classList.add(styles["scale-up"]);
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 mt-10 ">
      <DashedLineWithImage />

      <div className="relative w-full  flex items-center ">
        <div className="relative flex w-2/5 h-full ">
          <div className="absolute inset-0 flex justify-center items-center h-[65vh] top-5  -left-5 w-[40vw]">
            <Image
              src={secondPageContent.mandalaImg}
              alt="Mandala Design"
              layout="fill"
              objectFit="cover"
              ref={mandalaRef}
              className="object-contain  " style={{left:'-12%'}}
            />


            
          <div className="relative flex justify-center items-center w-[23vw] h-[42vh] -left-8 ">
           
              <Image
                src={secondPageContent.topImg}
                alt="Jaipur"
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-xl object-cover "
                style={{ aspectRatio: "2 / 2" }} // Adjust aspect ratio if needed
              />
            
          </div>
          </div>

          {/* <div className="relative flex justify-center items-center w-[25vw] h-[45vh] left-28 top-20">
           
              <Image
                src={secondPageContent.topImg}
                alt="Jaipur"
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-xl object-cover "
                style={{ aspectRatio: "2 / 2" }} // Adjust aspect ratio if needed
              />
            
          </div> */}
        </div>

        <div className="flex-1 relative top-20 right-16 h-full w-3/4 ">
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
