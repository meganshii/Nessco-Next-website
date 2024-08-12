import React, { useState, useEffect, useRef, useCallback } from "react";
import { Machines, SidebarLinks, images } from "../Constants/Navbar/product-data";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PositionAwareButton from "../ui/PositionAwareButton";
import { BlurImage } from "../ui/BlurImage";
import { motion } from "framer-motion";

interface ProductLayoutProps {
  setHoveredItem: (item: string | null) => void;
  setHeading: (heading: string | null) => void;
  setIsVisible: (visible: boolean) => void;
}

interface Images {
  [key: string]: StaticImageData;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  setHoveredItem,
  setHeading,
  setIsVisible,
}) => {
  const [hoveredCategory, setHoveredCategory] = useState<string>(SidebarLinks[0].name);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [sidebarIndex, setSidebarIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredMachines = Machines.filter((machine) =>
    hoveredCategory ? machine.category.includes(hoveredCategory) : false
  ).map((machine) => ({
    ...machine,
    image: (images as unknown as Images)[machine.image],
  }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredMachines.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredMachines.length) % filteredMachines.length);
  };

  const handleSidebarNext = () => {
    setSidebarIndex((prevIndex) => prevIndex + 1);
  };

  const handleSidebarPrev = () => {
    setSidebarIndex((prevIndex) => prevIndex - 1);
  };

  const handleMouseLeave = useCallback(() => {
    setHoveredCategory("");
    setCurrentIndex(0);
    setHoveredItem(null);
    setHeading(null);
    setIsVisible(true);
  }, [setHoveredItem, setHeading, setIsVisible]);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (containerElement) {
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseLeave]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [hoveredCategory]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,  // Reduced delay for faster sequence
        duration: 0.2,    // Reduced duration for quicker animation
        ease: "easeInOut",
      },
    }),
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.02,  // Sequential delay for sidebar links
        duration: 0.2,   // Duration for sidebar link animation
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={containerRef} className="w-[98vw] max-w-screen-2xl z-30 md:h-[78vh] p-0 rounded-xl flex flex-col items-center justify-center font-medium">
      <div className="w-full  flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex  justify-center items-center w-full md:w-[72%] relative">
          {filteredMachines.length > 6 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-0 text-4xl border-2 rounded-full overflow-hidden bg-white text-black transition-all hover:text-white hover:bg-black"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <MdKeyboardArrowLeft />
            </button>
          )}
          <div className="flex flex-wrap pb-8 justify-start overflow-hidden w-full">
            {filteredMachines.length <= 6
              ? filteredMachines.map((machine, index) => (
                  <motion.div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3 p-1"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    onMouseEnter={() => setHoveredImageIndex(index)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                  >
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      className="object-contain transform hover:scale-90 transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
                      width={200}
                      height={150}
                    />
                    <h3 className="text-lg text-black mt-2 font-bold relative z-20">
                      {machine.name}
                    </h3>
                    <div className="flex justify-center mt-2 space-x-2">
                      <a
                        href={`/products/${machine.name}`}
                        onClick={() => handleMouseLeave()}
                        className="relative text-white bg-red-500 rounded-3xl px-8 p-1 z-20 transform hover:scale-90 transition-transform duration-300"
                      >
                        Book Now
                      </a>
                    </div>
                  </motion.div>
                ))
              : filteredMachines.slice(currentIndex, currentIndex + 6).map((machine, index) => (
                  <motion.div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3 p-2"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    onMouseEnter={() => setHoveredImageIndex(index)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                  >
                    <BlurImage
                      src={machine.image}
                      alt={machine.name}
                      className="relative rounded-3xl z-10 h-auto w-full"
                      width={200}
                      height={150}
                    />
                    <h1 className="text-lg text-black font-bold pt-0 relative z-20">
                      {machine.name}
                    </h1>
                    <div className="flex justify-center pt-4 space-x-4 mt-2">
                      <a
                        href={`/products/${machine.name}`}
                        onClick={() => handleMouseLeave()}
                        className="relative text-white rounded-3xl transform hover:scale-90 transition-transform duration-300 px-8 p-1 z-20"
                      >
                        <PositionAwareButton text={"Book Now"} />
                      </a>
                    </div>
                  </motion.div>
                ))}
          </div>
          {filteredMachines.length > 6 && (
            <button
              onClick={handleNext}
              className="absolute border-2 rounded-full right-0 z-10 h-10 w-10 animated-button-right"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
        <div className="w-full mt-0 md:w-[28%] h-[78vh] flex justify-center items-center border-l overflow-y-hidden border-gray-300 relative">
          <div className="space-y-5">
            {sidebarIndex > 0 && (
              <button
                onClick={handleSidebarPrev}
                className="absolute top-0 left-1/2 text-4xl transform p-0 text-black"
              >
                <MdKeyboardArrowUp />
              </button>
            )}
            {SidebarLinks.slice(sidebarIndex, sidebarIndex + 8).map((link, index) => (
              <motion.div
                key={link.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={sidebarVariants}
                onMouseEnter={() => {
                  setHoveredCategory(link.name);
                  setCurrentIndex(0);
                }}
                className={`flex items-center space-x-4 text-lg transition-colors duration-300 cursor-pointer ${
                  hoveredCategory === link.name
                    ? "font-montserrat text-[#483d78] font-bold"
                    : "font-montserrat text-black"
                }`}
              >
                <div className="flex items-center justify-center cursor-pointer">
                  <BlurImage
                    className="rounded-full h-6 w-6 transform hover:scale-80 transition-transform duration-300 bg-transparent"
                    src={link.icon}
                    alt="machine icon"
                  />
                </div>
                <span className="break-words text-base transform hover:scale-80 transition-transform duration-100">
                  {link.name}
                </span>
              </motion.div>
            ))}
            {sidebarIndex + 6 < SidebarLinks.length && (
              <button
                onClick={handleSidebarNext}
                className="absolute bottom-0 left-1/2 text-4xl p-0 text-black"
              >
                <MdKeyboardArrowDown />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
