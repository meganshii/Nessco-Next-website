import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Machines,
  SidebarLinks,
  images,
} from "../Constants/Navbar/product-data";
import Image, { StaticImageData } from "next/image";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import Link from "next/link";
import PositionAwareButton from "../ui/PositionAwareButton";

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
  const [hoveredCategory, setHoveredCategory] = useState<string>(
    SidebarLinks[0].name
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(
    null
  );
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
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredMachines.length) % filteredMachines.length
    );
  };

  const handleSidebarNext = () => {
    setSidebarIndex((prevIndex) =>
      prevIndex + 6 < SidebarLinks.length ? prevIndex + 6 : prevIndex
    );
  };

  const handleSidebarPrev = () => {
    setSidebarIndex((prevIndex) =>
      prevIndex - 6 >= 0 ? prevIndex - 6 : prevIndex
    );
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

  return (
    <div
      ref={containerRef}
      className="w-[98vw] max-w-screen-2xl z-30 md:h-[85vh] p-6  rounded-xl flex flex-col justify-center items-center font-medium"
    >
      <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex h-full justify-center items-center w-full md:w-3/4 relative">
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
                  <div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3 p-1"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: "1s",
                      animationFillMode: "both",
                      animationTimingFunction: "ease-in-out",
                      animationName: "fadeIn",
                    }}
                    onMouseEnter={() => setHoveredImageIndex(index)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                  >
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      className={`object-contain transform hover:scale-90 transition-transform duration-200 rounded-lg relative z-10 h-32 w-full `}
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
                  </div>
                ))
              : filteredMachines
                  .slice(currentIndex, currentIndex + 6)
                  .map((machine, index) => (
                    <div
                      key={`${machine.name}-${index}`}
                      className="text-center relative w-1/3 p-2"
                      onMouseEnter={() => setHoveredImageIndex(index)}
                      onMouseLeave={() => setHoveredImageIndex(null)}
                    >
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        className={`relative z-10 h-auto w-full`}
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
                    </div>
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
        <div className="w-full mt-2 md:w-1/4 pl-4 space-y-2 border-l border-gray-300 relative">
          {sidebarIndex > 0 && (
            <button
              onClick={handleSidebarPrev}
              className="absolute top-0 left-1/2 text-4xl transform -translate-x-1/2 p-0  text-black hover:scale-90 transition-transform duration-200"
            >
              <MdKeyboardArrowUp />
            </button>
          )}
          <div className="pt-6 space-y-6">
            {SidebarLinks.slice(sidebarIndex, sidebarIndex + 8).map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => {
                  setHoveredCategory(link.name);
                  setCurrentIndex(0);
                }}
                className={`flex items-center space-x-4 text-lg transition-colors duration-300 cursor-pointer ${
                  hoveredCategory === link.name
                    ? "font-montserrat text-[#483d73]"
                    : "font-montserrat text-[#483d73]"
                }`}
              >
                <div
                  className={`flex items-center bg-fixed object-contain bg-no-repeat  justify-center cursor-pointer}`}
                >
                  <Image
                    className="rounded-full h-6 w-6 transform hover:scale-90 transition-transform duration-300 bg-transparent"
                    src={link.icon}
                    alt="machine icon"
                  />
                </div>
                <span
                  className={`transform hover:scale-80 transition-transform duration-100`}
                >
                  {link.name}
                </span>
              </div>
            ))}
          </div>
          {sidebarIndex + 6 < SidebarLinks.length && (
            <button
              onClick={handleSidebarNext}
              className="absolute bottom-0 left-1/2 transform text-4xl -translate-x-1/2 p-0 text-black hover:scale-90 transition-transform duration-200"
            >
              <MdKeyboardArrowDown />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductLayout;
