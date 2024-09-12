"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {teampage} from "../Constants/ourCompany/OurcompanyPage.json"
export default function TeamPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (video && container) {
      gsap.registerPlugin(ScrollTrigger);

      const updateVideoTime = () => {
        const duration = video.duration;
        const scrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        const videoTime = duration * scrollFraction;
        video.currentTime = videoTime;
      };

      window.addEventListener("scroll", updateVideoTime);

      return () => {
        window.removeEventListener("scroll", updateVideoTime);
      };
    }
  }, []);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden lg:top-0 top-10 "
      ref={containerRef}
    >
      <video
        ref={videoRef}
        className="absolute lg:top-0 top-28 left-0 lg:w-full lg:h-[80vh] mt-8 object-cover w-full "
        src={teampage.video}
        muted
        playsInline
      />
      <div className="absolute top-12 w-full text-center z-10 mt-5">
        <h1 className="text-4xl font-montserrat text-white">
         {teampage.heading} <span className="text-rose-500">{teampage.highlight}</span>
        </h1>
      </div>
      <div className="absolute lg:bottom-0 bottom-48 items text-center text-white lg:space-y-7 ">
        <h1 className="lg:text-4xl text-3xl font-poppins text-white  ">
         {teampage.quote}
        </h1>
        <p className="text-center font-poppins px-5 mt-5 lg:invisible  ">{teampage.description} </p>
        </div>
     
    </div>
  );
}
