import React, { useRef, useEffect } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdPlayCircleOutline,
} from "react-icons/md";
import { BgMapImage } from "../../../public/assets";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import "./Layout.css";
import PositionAwareButton from "../ui/PositionAwareButton";

interface SupportItem {
  title: string;
  image: StaticImageData;
}

interface SupportLayoutProps {
  setHoveredItem: (item: any) => void;
  supporItem: SupportItem[];
  type: string;
}

const SupportLayout: React.FC<SupportLayoutProps> = ({
  setHoveredItem,
  supporItem,
  type,
}) => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardWidth = useRef<number>(0);
  const cardCount = supporItem.length;

  const backgroundImageStyle =
    type !== "Resources" ? { backgroundImage: `url(${BgMapImage})` } : {};

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const initializeCarousel = () => {
      firstCardWidth.current =
        (carousel.querySelector(".card") as HTMLElement)?.offsetWidth || 0;
      const carouselChildren = Array.from(carousel.children);
      carouselChildren
        .slice(-cardCount)
        .reverse()
        .forEach((card) => {
          carousel.insertAdjacentHTML(
            "afterbegin",
            (card as HTMLElement).outerHTML
          );
        });
      carouselChildren.slice(0, cardCount).forEach((card) => {
        carousel.insertAdjacentHTML(
          "beforeend",
          (card as HTMLElement).outerHTML
        );
      });

      carousel.classList.add("no-transition");
      carousel.scrollLeft = firstCardWidth.current * cardCount;
      carousel.classList.remove("no-transition");
    };

    initializeCarousel();
    window.addEventListener("resize", initializeCarousel);

    const handleScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = firstCardWidth.current * cardCount;
        carousel.classList.remove("no-transition");
      } else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = firstCardWidth.current * cardCount;
        carousel.classList.remove("no-transition");
      }
    };

    carousel.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", initializeCarousel);
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [cardCount]);

  const handleArrowClick = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollAmount =
      direction === "left" ? -firstCardWidth.current : firstCardWidth.current;
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    if (e.clientY >= rect.bottom) {
      gsap.to(container, {
        duration: 0.2,
        opacity: 0,
        onComplete: () => {
          setHoveredItem(null);
          gsap.to(container, { opacity: 1 });
        },
      });
    }
  };

  const IMAGE_WIDTH = 300;
  const IMAGE_HEIGHT = 200;

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
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      ref={containerRef}
      className={`wrapper rounded-lg w-[98vw]  max-w-screen-2xl mx-auto relative  ${
        type === "Resources" ? "h-[60vh]" : "h-[45vh]"
      } `}
    >
      <div
        className={`h-full w-full ${
          type === "Resources" ? "-mt-14" : ""
        } flex items-center justify-center`}
      >
        <button
          onClick={() => handleArrowClick("left")}
          className="absolute z-10 left-0 p-0 text-4xl ml-2 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-30 custom-scale">
            <MdKeyboardArrowLeft />
          </span>
        </button>
        <ul
          className={`mask-gradient-support carousel ${
            type === "Resources" ? "h-[60vh]" : " h-[45vh]"
          }`}
          ref={carouselRef}
        >
          {supporItem.map((card, index) => (
            <li
              className="ml-4 flex flex-col h-full items-center justify-center"
              key={`original-${index}`}
            >
              <div
                style={backgroundImageStyle}
                className="card relative  custom-scale-80 "
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {type === "Resources" && (
                  <MdPlayCircleOutline className="absolute top-2 right-2 text-[#483d78] text-3xl" />
                )}
                <Image
                  className="img"
                  src={card.image}
                  alt={card.title}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  draggable="false"
                />
              </div>
              <span className="font-montserrat custom-scale-90 text-black mt-4 font-medium hover:text-[#483d78] hover:font-bold text-16">
                {card.title}
              </span>
            </li>
          ))}
          {supporItem.map((card, index) => (
            <li
              className="ml-4 flex flex-col items-center justify-center"
              key={`clone-start-${index}`}
            >
              <div
                style={backgroundImageStyle}
                className="card relative custom-scale-80"
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {type === "Resources" && (
                  <MdPlayCircleOutline className="absolute top-2 right-2 text-[#483d78] text-3xl" />
                )}
                <Image
                  className="img"
                  src={card.image.src}
                  alt={card.title}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  draggable="false"
                />
              </div>
              <span className="font-montserrat custom-scale-90 text-black mt-4 font-medium hover:text-[#483d78] hover:font-bold text-16">
                {card.title}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleArrowClick("right")}
          className="absolute right-0 z-30 p-0 text-4xl mr-2 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-30">
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div>
      {type === "Resources" && (
        <div className="absolute bottom-6 mt-0 z-30 right-20  transition-all">
          <PositionAwareButton
            text={"Explore All Resources"}
            width="240px"
            icon
          />
        </div>
      )}
    </div>
  );
};

export default SupportLayout;
