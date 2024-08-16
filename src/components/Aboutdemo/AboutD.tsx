// "use client";

// import Head from 'next/head';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { gsap } from 'gsap/gsap-core';
// import { sections } from '../Constants/About/AboutD-page' // Import the sections array


// const AboutD = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);



//   return (
//     <>
//       <Head>
//         <title>About Us</title>
//       </Head>
//       <div className="h-screen bg-black w-screen">
//         <div className="inset-0 overflow-hidden space-x-6 ">
        
//             <video
//               className="absolute inset-0 h-[90%] w-full object-cover transition-opacity duration-75 scale-95 rounded-tr-xl rounded-tl-xl top-16"
//               autoPlay
//               loop
//               muted
//             >
//                 <source src="/assets/about/AboutUs.mp4" type="video/mp4" />
//             </video>
   
//             <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black to-transparent"></div>        </div>
        
//             {sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className=" absolute bottom-10 right-20 text-white ">
//             <h2 className="text-xl md:text-3xl font-montserrat text-center ">"Excellence In Innovation &</h2>
//             <h2 className="text-xl md:text-3xl font-montserrat  text-center mb-12 ">{section.subtitle} <span className="text-white">{section.highlight} "</span></h2>
//             <div className="relative  w-full flex flex-col md:flex-row justify-end  md:space-x-14 text-white">
//               {section.content.map((item, itemIndex) => (
//                 <div key={itemIndex} className="flex flex-col items-center text-center relative">
//                   <Image 
//                     src={item.image} 
//                     alt={item.alt} 
//                     width={200} // set appropriate width
//                     height={200} // set appropriate height
//                     className="h-auto" 
//                   />
//                   <div className='text-center'>
//                     <p className='text-xs md:text-sm w-full md:w-[9rem]'>
//                       {item.description.split(' ').map((word, i) => (
//                         i > 0 && word.toLowerCase() === 'of' ? <><br key={i}/>{word}</> : word
//                       )).reduce<React.ReactNode[]>((prev, curr) => prev.concat(' ', curr), [])}
//                     </p>
//                   </div>
//                   {itemIndex < section.content.length - 1 && (
//                     <div className="absolute -right-5 h-full border-r-2 border-white" style={{ top: 0, height: '125%' }}></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//           <div className="absolute bottom-9 left-20 text-white text-8xl font-alexBrush">
//           Our Company
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutD;

"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";



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
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/assets/about/AboutUs.mp4" type="video/mp4" />
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
      Our Company
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