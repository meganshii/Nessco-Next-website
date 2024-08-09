"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "./Common/Carousel";
import Link from "next/link";
import PositionAwareButton from "../ui/PositionAwareButton";

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

const Hero: React.FC = () => {
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
    <div className="relative h-screen max-w-screen-2xl flex flex-col items-center overflow-hidden min-h-screen w-full">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <motion.div
          className="md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-270px)] rounded-xl"
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <video
              id="background-video"
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="video/BgHome.mp4" type="video/mp4" />
              <source src="video/bg.webm" type="video/webm" />
              <source src="video/bg.ogv" type="video/ogg" />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
        <div className="absolute px-8 h-full text-white w-full flex flex-col justify-end items-start bottom-0 left-8 sm:bottom-5 sm:left-10 md:bottom-20 md:left-20">
          <div className="mb-4">
            {" "}
            <PositionAwareButton
              text={"Get a Quote"}
              icon={true}
              bgColor="white"
              width="155px"
            />
          </div>
        </div>
      </div>
      <div className="flex my-8 mx-14 flex-col md:flex-row px-10 w-full">
        <div className="w-full md:w-2/5 mx-1 flex flex-col mb-4 md:mb-2">
          <p className="text-2xl mx-4 md:text-2xl lg:text-4xl font-poppins font-thin">
            FOOD PACKING MACHINES
          </p>
          <div className="ml-4">
            <span className="text-7xl text-[#524c42] font-alexBrush">
              Manufacturing
            </span>
          </div>
        </div>
        <div className="w-full px-4 md:w-3/5">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";

export default memo(Hero);

// "use client";
// import React, { useState, useCallback, memo, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// import Link from "next/link";

// interface NavLinkProps {
//   text: string;
//   index: number;
//   activeLink: number;
//   handleMouseEnter: (index: number) => void;
//   handleMouseLeave: () => void;
//   handleClick: () => void;
// }

// const NavLink: React.FC<NavLinkProps> = memo(
//   ({
//     text,
//     index,
//     activeLink,
//     handleMouseEnter,
//     handleMouseLeave,
//     handleClick,
//   }) => (
//     <Link
//       href=""
//       scroll={false}
//       className={`text-black hover:font-bold custome-scale-90 ${
//         activeLink === index ? "border-b-2 border-red-600" : ""
//       }`}
//       onMouseEnter={() => handleMouseEnter(index)}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick}
//     >
//       {text}
//     </Link>
//   )
// );

// NavLink.displayName = "NavLink";

// const Home: React.FC = () => {
//   const [activeLink, setActiveLink] = useState<number>(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
//   const videoRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseEnter = useCallback((index: number) => {
//     setActiveLink(index);
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     setActiveLink(-1);
//   }, []);

//   const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVideoLoaded(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (observer) {
//         observer.disconnect();
//       }
//     };
//   }, []);
//   const { scrollY } = useScroll();
//   const videoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
//   const videoX = useTransform(scrollY, [0, 300], ["0%", "-25%"]);
//   return (
//     <div className="relative h-screen max-w-screen-2xl flex flex-col items-center overflow-hidden min-h-screen w-full">
//       <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
//         <motion.div
//           className="md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-120px)] rounded-xl"
//           ref={videoRef}
//           style={{ width: videoWidth, x: videoX, originX: 0.5 }}
//         >
//           {isVideoLoaded ? (
//             <video
//               id="background-video"
//               className="w-full h-full object-cover rounded-2xl"
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="metadata"
//             >
//               <source src="video/BgHome.mp4" type="video/mp4" />
//               <source src="video/bg.webm" type="video/webm" />
//               <source src="video/bg.ogv" type="video/ogg" />
//             </video>
//           ) : (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="loader"></div>
//             </div>
//           )}
//         </motion.div>
//       </div>

//       <div className="absolute bottom-0 mb-32 left-28  text-7xl text-white font-alexBrush">
//         Manufacturing
//       </div>

//       <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 h-32 w-px bg-white"></div>

//       <div className="absolute right-56 bottom-5 mb-24 text-3xl font-poppins text-white text-center">
//         <p>Food & Packaging</p>
//         <p>Machine</p>
//       </div>
//     </div>
//   );
// };

// Home.displayName = "Hero";

// export default memo(Home);
