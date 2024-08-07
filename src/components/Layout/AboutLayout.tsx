"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { items, titlesWithImages } from "../Constants/Navbar/about-data";

const AboutLayout = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollDown = () => {
    if (currentIndex < items.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollUp = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      scrollDown();
    } else {
      scrollUp();
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    controls.start({
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.05, ease: "easeOut" },
    });
  }, [currentIndex, controls]);

  return (
    <div
      ref={containerRef}
      className="flex w-[98vw] py-4 max-w-screen-2xl flex-col md:flex-row items-center justify-center rounded-xl  h-full "
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-screen-lg">
        {titlesWithImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center mt-4"
          >
            <Link href={`/${item.title}`} passHref>
              <Image
                src={item.image}
                alt={item.title}
                className="bg-gray-600 rounded-2xl cursor-pointer w-58 h-56 object-cover transform hover:scale-80 transition-transform duration-200"
                width={240}
                height={240}
              />
              <p className="mt-2 text-center font-montserrat text-black hover:text-[#483d78] hover:font-bold text-base transform hover:scale-90 transition-transform duration-300">
                {item.title}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="ml-4 w-2 h-72 border-l border-gray-300"></div>
      <div className="ml-4 md:w-[15%] min-h-full flex flex-col justify-between">
        <motion.div
          ref={carouselRef}
          initial={{ y: "100%", scale: 0.5, opacity: 0 }}
          animate={controls}
        >
          {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
            <Link key={index} href={`/${item.title}`} passHref>
              <div
                className={`${item.color} hover:scale-80 transition-transform duration-200 flex items-center p-4 rounded-3xl mb-2`}
              >
                <div
                  className={`h-12 w-12 mr-2 flex justify-center items-center text-lg ${item.textcolor}`}
                >
                  <item.icon />
                </div>
                <div>
                  <h3 className="text-md text-black font-bold mb-0">
                    {item.title}
                  </h3>
                  <p className="text-xs text-black line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
        <div className="flex w-full justify-center">
          {currentIndex > 0 && (
            <button
              onClick={scrollUp}
              className="absolute text-2xl text-black top-0 p-2 rounded-full"
            >
              <IoIosArrowUp />
            </button>
          )}
        </div>
        <div className="bottom-4 flex w-full justify-center text-3xl">
          {currentIndex < items.length - 2 && (
            <button
              onClick={scrollDown}
              className="absolute bg-transparent text-black flex justify-center items-center rounded-full"
            >
              <IoIosArrowDown />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
