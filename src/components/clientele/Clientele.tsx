"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const clientele: React.FC = () => {
  const leftHandRef = useRef<HTMLDivElement>(null);
  const rightHandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(leftHandRef.current, {
      x: 100, // Move right
      duration: 4,
      ease: "power2.inOut",
    })
      .to(rightHandRef.current, {
        x: -100, // Move left
        duration: 4,
        ease: "power2.inOut",
      }, "<") // "<" syncs the two animations
      .to(leftHandRef.current, {
         // Move back to the original position
        duration: 4,
        ease: "power2.inOut",
      })
      .to(rightHandRef.current, {
         // Move back to the original position
        duration: 4,
        ease: "power2.inOut",
      }, "<");
  }, []);

  return (
    <>
      <div className="h-full w-full bg-black">
        <h1 className="relative font-poppins font-bold text-5xl left-7 top-20 text-white ">
          Clientele
        </h1>
        <div className="flex justify-between relative">
          {/* Left Hand */}
          <div className="relative top-14 left-24 z-10" ref={leftHandRef}>
            <Image
              src="/assets/clientele/28.svg"
              alt="lefthand"
              height={500}
              width={500}
              className=" "
            />
          </div>

          {/* Right Hand */}
          <div className="relative right-24 top-5" ref={rightHandRef}>
            <Image
              src="/assets/clientele/29.svg"
              alt="righthand"
              height={500}
              width={500}
              className=""
            />
          </div>
        </div>
        <div className="flex  w-full font-poppins pl-5 text-white relative -top-[7vh] ">
          <div className=" w-2/5 text-5xl font-semibold">
            <p className="w-[16rem]">More than 1000 customers</p>
          </div>

          <div className=" w-3/5 relative text-right pr-5">
            <p className="">
              We are fortunate to have produced presentation materials for all
              sectors of activity and company sizes, in all graphic universes.
            </p>
            <p className=" font-bold pt-2 text-md">
              37 CAC40 companies have placed their trust in us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default clientele;
