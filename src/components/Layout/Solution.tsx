import React, { useState, useRef, useEffect } from "react";
import { Items, item } from "../Constants/index"; // Adjust the path as necessary
import { SlArrowRight, SlArrowDown, SlArrowUp } from "react-icons/sl";
import styles from "../Layout/solution.module.css"; // Adjust the path as necessary
import Image from "next/image";

const Solution: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<item>(Items[0]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleScroll = () => {
    if (listRef.current && listRef.current.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleItemHover = (item: item) => {
    setHoveredItem(item.id);
    setSelectedItem(item);
  };

  const handleScrollUp = () => {
    if (listRef.current) {
      listRef.current.scrollTop -= 50; // Adjust scroll amount as needed
    }
  };

  const handleScrollDown = () => {
    if (listRef.current) {
      listRef.current.scrollTop += 50; // Adjust scroll amount as needed
    }
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    const currentRef = listRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex pb-8 justify-center items-start w-[98vw] h-full  max-w-screen-2xl">
      <div className="rounded-b-5xl  h-4/5 w-full relative">
        <div className="flex">
          <div className="p-8 relative w-9/12">
            <div className="relative ml-10">
              <Image
                src={selectedItem.img.src}
                alt={selectedItem.name}
                height={100}
                width={100}
                className="absolute -right-9 rounded-lg w-72 h-72 object-cover"
              />
            </div>
            <div className="relative z-10 w-4/5">
              <h2 className="text-6xl font-extrabold text-[#483d73]">
                {selectedItem.name.split(" ")[0]}
              </h2>
              <h2 className="text-6xl font-extrabold text-red-600">
                {selectedItem.name.split(" ").slice(1).join(" ")}
              </h2>
              <div className="w-3/4">
                <p className="text-sm text-black mt-4 font-montserrat w-auto">
                  {selectedItem.description}
                </p>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <div className="gap-2 flex flex-row">
                <button className={styles.customButton}>
                  Know More
                  <SlArrowRight className={styles.customIcon} />
                </button>
                <button className={styles.customButton}>
                  Know More
                  <SlArrowRight className={styles.customIcon} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-r border-gray-400 p-4 mb-7 mt-5"></div>
          <div className="w-[24%] p-4">
            <div className="relative text-black">
              <SlArrowUp
                className={`${styles.arrowUp} ${
                  isScrolled ? "visible" : "invisible"
                }`}
                onClick={handleScrollUp}
              />
            </div>

            <div
              ref={listRef}
              className={`space-y-3 h-72 overflow-y-auto ${styles.hideScrollbar} -ml-2 mt-4`}
            >
              {Items.map((item, index) => (
                <p
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }} // Update ref assignment
                  className={`p-2 ${
                    selectedItem.id === item.id || hoveredItem === item.id
                      ? "text-[#483d73] font-bold"
                      : "text-black"
                  } hover:text-[#483d73] hover:font-bold`}
                  onMouseEnter={() => handleItemHover(item)}
                  onMouseLeave={handleItemLeave}
                >
                  {item.name}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <SlArrowDown
                className={`${styles.arrowDown} text-[#483d73]`}
                onClick={handleScrollDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
