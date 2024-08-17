"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { aboutData } from "../Constants/About/AboutD-page";

const Home: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveLink(-1);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const { scrollY } = useScroll();
  const videoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
  const videoX = useTransform(scrollY, [0, 300], ["0%", "-25%"]);

  return (
    <div className="relative h-screen max-w-screen-2xl flex flex-col items-center overflow-hidden min-h-screen w-full top-3">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <motion.div
          className="md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-120px)] rounded-xl"
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <div className="relative w-full h-full">
              <video
                id="background-video"
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setIsVideoLoaded(true)}
              >
                <source src={aboutData.videoSrc} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-24 text-white text-8xl font-alexBrush">
        {aboutData.mainHeading}
      </div>

      <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 h-32 w-px bg-white"></div>

      <div className="absolute right-[5rem] bottom-3 mb-20 text-md font-montserrat text-white text-center flex flex-col items-center">
        <div className="flex space-x-4">
          {aboutData.iconData.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className={`ml-${icon.marginLeft}`}
              />
              <p className={`w-[${icon.textWidth}] -mt-12`}>{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Hero";

export default memo(Home);
