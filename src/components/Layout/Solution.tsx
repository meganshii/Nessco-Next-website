import React, { useState, useEffect } from "react";
import { Items, item } from "../Constants/index"; // Adjust the path as necessary
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import styles from "../Layout/solution.module.css"; // Adjust the path as necessary
import Image from "next/image";
import PositionAwareButton from "../ui/PositionAwareButton";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion for animations

const Solution: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<item>(Items[0]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [sidebarIndex, setSidebarIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [controls]);

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
  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05, // Sequential delay for sidebar links
        duration: 0.1, // Duration for sidebar link animation
        ease: "easeOut",
      },
    }),
  };
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
  return (
    <div className="flex pb-2 justify-center items-start w-[98vw] h-full max-w-screen-2xl">
      <div className="rounded-b-5xl h-4/5 w-full relative">
        <div className="flex">
          <div className="p-8 relative w-9/12">
            <div className="relative ml-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
              >
                <Image
                  src={selectedItem.img.src}
                  alt={selectedItem.name}
                  height={400}
                  width={400}
                  className="absolute -right-9 rounded-lg w-80 h-80 object-cover"
                />
              </motion.div>
            </div>
            <div className="relative z-10 w-4/5">
              <motion.h2
                className="text-6xl font-extrabold text-[#483d73]"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {selectedItem.name.split(" ")[0]}
              </motion.h2>
              <motion.h2
                className="text-6xl font-extrabold text-red-600"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {selectedItem.name.split(" ").slice(1).join(" ")}
              </motion.h2>
              <motion.div
                className="w-3/4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-base text-black mt-4 font-montserrat w-auto">
                  {selectedItem.description}
                </p>
              </motion.div>
            </div>

            <motion.div
              className={styles.buttonContainer}
              whileHover={{ scale: 1.05 }}
            >
              <PositionAwareButton text={"Know More"} icon width="155px" />
            </motion.div>
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

            <div
              className={`space-y-2 h-72 overflow-hidden ${styles.hideScrollbar} -ml-2 mt-4`}
            >
              {Items.slice(sidebarIndex, sidebarIndex + 6).map(
                (item, index) => (
                  <motion.div
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={sidebarVariants}
                    key={item.id}
                    className={`p-2 break-words space-x-4 text-base font-montserrat transition-transform duration-300 ${
                      selectedItem.id === item.id || hoveredItem === item.id
                        ? "text-[#483d73] font-bold"
                        : "text-black"
                    } hover:text-[#483d73] hover:font-bold`}
                    onMouseEnter={() => handleItemHover(item)}
                    onMouseLeave={handleItemLeave}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.div>
                )
              )}
            </div>

            <div className="mt-8 font-bold">
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
