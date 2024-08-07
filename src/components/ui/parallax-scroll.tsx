"use client";
import { useScroll, useTransform, easeOut } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface ImageData {
  src: string;
  username: string;
  profile: string;
  country: string;
  quote: string;
  flag: string;
}

interface ParallaxScrollProps {
  images: ImageData[];
  className?: string;
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({ images, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200], { ease: easeOut });
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200], { ease: easeOut });
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200], { ease: easeOut });

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const tl = gsap.timeline({ repeat: -1, paused: true });
      tl.to(container, {
        scrollTo: { y: container.scrollHeight - container.clientHeight },
        duration: 40,
        ease: "linear",
        onComplete: () => {
          container.scrollTop = 1;
        },
      });

      const handleMouseEnter = () => tl.pause();
      const handleMouseLeave = () => tl.resume();

      container.addEventListener("mouseenter", handleMouseEnter, true);
      container.addEventListener("mouseleave", handleMouseLeave, true);

      tl.play();

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter, true);
        container.removeEventListener("mouseleave", handleMouseLeave, true);
        tl.kill();
      };
    }
  }, []);

  const renderCard = (
    el: ImageData,
    translate: any,
    keyPrefix: string,
    idx: number
  ) => (
    <motion.div
      style={{ y: translate }}
      key={`${keyPrefix}-${idx}`}
      className="card"
    >
      <div className="p-1 rounded-3xl border-2 bg-gradient-to-t from-blue-500 to-transparent">
        <div className="p-4 h-[18rem] w-[16rem] bg-white rounded-3xl">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <Image
                src={el.src}
                className="h-12 w-12 rounded-full object-cover"
                height="48"
                width="48"
                alt={el.username}
              />
              <div className="flex justify-end mr-2 mt-0">
                <img
                  src={el.flag}
                  alt={`${el.country} flag`}
                  className="w-8 h-8"
                />
              </div>
            </div>
            <p className="text-center text-4xl">❝</p>
            <p className="text-gray-700 mt-4 text-center">{el.quote}</p>
            <div className="ml-2 mt-4 flex flex-row justify-start items-start">
              <div className="relative mt-12 h-10 w-1 bg-[#483d78]"></div>
              <div className="flex ml-2 mt-10 flex-col">
                <h3 className="text-lg font-bold">{el.username}</h3>
                <p className="text-sm text-gray-500">{el.profile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className={`h-[60rem] removescrollablesidebar w-full overflow-y-hidden ${className}`}
      ref={containerRef}
      style={{ overflowX: "hidden" }} // Hide horizontal scrollbar
    >
      <div className="grid ml-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        <div className="grid gap-2">
          {firstPart.map((el, idx) =>
            renderCard(el, translateFirst, "grid-1", idx)
          )}
        </div>
        <div className="grid gap-2">
          {secondPart.map((el, idx) =>
            renderCard(el, translateSecond, "grid-2", idx)
          )}
        </div>
        <div className="grid gap-2">
          {thirdPart.map((el, idx) =>
            renderCard(el, translateThird, "grid-3", idx)
          )}
        </div>
      </div>
    </div>
  );
};
