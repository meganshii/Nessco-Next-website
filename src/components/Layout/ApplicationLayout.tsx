import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import Image, { StaticImageData } from "next/image";
import { item, Item } from "../Constants/index";
import styles from "./application.module.css";

const Application: React.FC<{
  onHover: (item: Item) => void;
  items: Item[];
}> = ({ onHover, items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number, item: Item) => {
    setHoveredIndex(index);
    onHover(item);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid grid-cols-6 gap-4 h-[85vh] p-3 rounded ml-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-24 bg-[#575555] h-24 rounded-lg"
          onMouseEnter={() => handleMouseEnter(index, item)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={`/application/${item.name.toLowerCase().replace(/ /g, "-")}`}
            className="relative block w-full h-full"
          >
            <Image
              src={item.src.src}
              alt={item.alt}
              height={100}
              width={100}
              className={`object-cover min-w-full min-h-full transition-transform duration-300 ease-in-out rounded-b-md rounded-t-md ${
                hoveredIndex === index ? "transform translate-y-[-20%]" : ""
              }`}
            />
            <p
              onMouseEnter={() => onHover(item)}
              className={`absolute bottom-0 w-full text-white text-sm text-center transition-opacity duration-300 ease-in-out ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.name}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

const ApplicationPage: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<Item>(item[0]);

  const handleHover = (item: Item) => {
    setHoveredItem(item);
  };

  return (
    <div className="rounded-3xl w-[98vw] h-auto flex justify-center items-start max-w-screen-2xl">
      <div className="overflow-hidden relative">
        <div className="flex">
          <div className="w-9/12 p-3">
            <Application onHover={handleHover} items={item} />
          </div>
          <div className="relative flex items-center">
            <div className="border-r border-gray-300 h-5/6 absolute transform -translate-x-1/3"></div>
          </div>
          <div className="w-1/4 mt-24 relative">
            <div
              className="absolute inset-0 bg-cover bg-center h-40 w-40 mt-32 opacity-10 transition-opacity duration-300 ease-in-out ml-40"
              style={{ backgroundImage: `url(${hoveredItem.bgpic.src})` }}
            ></div>
            <div className="relative z-10 p-4 -mt-14">
              <h2 className="text-6xl font-montserrat font-extrabold text-[#483d73]">
                {hoveredItem.name.split(" ")[0]}
              </h2>
              <h2 className="text-6xl font-montserrat font-extrabold text-red-600">
                {hoveredItem.name.split(" ")[1]}
              </h2>
              <p className="text-lg mt-3 text-[#483d73]">
                {hoveredItem.description}
              </p>
            </div>
            <div className={styles.container}>
              <button className={styles.button}>
                Explore More
                <SlArrowRight className={styles.icon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
