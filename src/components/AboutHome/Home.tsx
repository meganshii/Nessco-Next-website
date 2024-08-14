"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";
import NavLinksDemo from './NavLink'


interface NavLinkProps {
  text: string;
  index: number;
  activeLink: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = memo(
  ({
    text,
    index,
    activeLink,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  }) => (
    <Link
      href=""
      scroll={false}
      className={`text-black hover:font-bold custome-scale-90 ${
        activeLink === index ? "border-b-2 border-red-600" : ""
      }`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
    </Link>
  )
);

NavLink.displayName = "NavLink";


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

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/assets/about/homevideo.mp4" type="video/mp4" />
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

    <div className="absolute bottom-16 left-28 text-white text-9xl font-alexBrush">
      About Us
    </div>

    <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 h-32 w-px bg-white"></div>

    <div className="absolute right-56 bottom-5 mb-24 text-2xl font-montserrat text-white text-center">
      <p>"Begins & Ends</p>
      <p>with customer smile"</p>
    </div>
  </div>
);
};


Home.displayName = "Hero";

export default memo(Home);