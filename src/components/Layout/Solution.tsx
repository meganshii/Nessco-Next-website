import React, { useState } from "react";
import { Items, item } from "../Constants/index"; // Adjust the path as necessary
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import styles from "../Layout/solution.module.css"; // Adjust the path as necessary
import Image from "next/image";
import PositionAwareButton from "../ui/PositionAwareButton";

const Solution: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<item>(Items[0]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [sidebarIndex, setSidebarIndex] = useState(0);

  const handleItemHover = (item: item) => {
    setHoveredItem(item.id);
    setSelectedItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const handleScrollUp = () => {
    if (sidebarIndex > 0) {
      setSidebarIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleScrollDown = () => {
    if (sidebarIndex + 5 < Items.length) {
      setSidebarIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex pb-8 justify-center items-start w-[98vw] h-full max-w-screen-2xl">
      <div className="rounded-b-5xl h-4/5 w-full relative">
        <div className="flex">
          <div className="p-8 relative w-9/12">
            <div className="relative ml-10">
              <Image
                src={selectedItem.img.src}
                alt={selectedItem.name}
                height={400}
                width={400}
                className="absolute -right-9 rounded-lg w-80 h-80 object-cover"
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
                <p className="text-base text-black mt-4 font-montserrat w-auto">
                  {selectedItem.description}
                </p>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <PositionAwareButton text={"Know More"} icon width="155px" />
            </div>
          </div>
          <div className="border-r border-gray-400 p-4 mb-7 mt-5"></div>
          <div className="w-[24%] p-4">
            <div className="relative text-black">
              <SlArrowUp
                className={`${styles.arrowUp} ${
                  sidebarIndex > 0 ? "visible" : "invisible"
                }`}
                onClick={handleScrollUp}
              />
            </div>

            <div className={`space-y-2 h-72 overflow-hidden ${styles.hideScrollbar} -ml-2 mt-4`}>
              {Items.slice(sidebarIndex, sidebarIndex + 6).map((item, index) => (
                <div
                  key={item.id}
                  className={`p-2 break-words space-x-4 text-lg font-montserrat transition-transform duration-300 ${
                    selectedItem.id === item.id || hoveredItem === item.id
                      ? "text-[#483d73] font-bold"
                      : "text-black"
                  } hover:text-[#483d73] hover:font-bold`}
                  onMouseEnter={() => handleItemHover(item)}
                  onMouseLeave={handleItemLeave}
                >
                  {item.name}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <SlArrowDown
                className={`${styles.arrowDown} ${
                  sidebarIndex + 6 < Items.length ? "visible" : "invisible"
                } text-[#483d73]`}
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
