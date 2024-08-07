"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: {
    src: string;
    username: string;
    profile: string;
    country: string;
    quote: string;
    flag: string;
  }[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  useEffect(() => {
    const container = containerRef.current;

    let observer: IntersectionObserver;
    let tl: gsap.core.Timeline;

    if (container) {
      tl = gsap.timeline({ repeat: -1, paused: true });
      tl.to(container, {
        scrollTo: { y: container.scrollHeight - container.clientHeight },
        duration: 40, // Slower duration
        ease: "linear",
      }).to(container, {
        scrollTo: { y: 0 },
        duration: 40, // Slower duration
        ease: "linear",
      });

      const handleMouseEnter = () => tl.pause();
      const handleMouseLeave = () => tl.resume();

      container.addEventListener("mouseenter", handleMouseEnter, true);
      container.addEventListener("mouseleave", handleMouseLeave, true);

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.resume();
          } else {
            tl.pause();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(container);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter, true);
        container.removeEventListener("mouseleave", handleMouseLeave, true);
        observer.disconnect();
      };
    }
  }, []);

  const renderCard = (
    el: any,
    translate: any,
    keyPrefix: string,
    idx: number
  ) => (
    <motion.div
      style={{ y: translate }}
      key={`${keyPrefix}-${idx}`}
      className="card"
    >
      <div className="p-4 bg-white border-2 border-blue-500 border-gradient-b from-blue-500 to-transparent rounded-3xl shadow-md">
        <div className="flex flex-col ">
          <div className="flex flex-row justify-between">
            <Image
              src={el.src}
              className="h-12 w-12 rounded-full object-cover"
              height="48"
              width="48"
              alt={el.username}
            />
            <div className="flex justify-end mt-0">
              <img
                src={el.flag}
                alt={`${el.country} flag`}
                className="w-8 h-8"
              />
            </div>
          </div>
          <p className="text-center text-4xl">❝</p>
          <p className="-mt-4 text-gray-700 text-center">{el.quote}</p>
          <div className="ml-2 mt-4 flex flex-row justify-start items-start">
            <div className="relative mt-2 h-10 w-1 bg-[#483d78]"></div>
            <div className="flex ml-2 flex-col">
              <h3 className="text-lg font-bold">{el.username}</h3>
              <p className="text-sm text-gray-500">{el.profile}</p>
              {/* <p className="text-sm text-gray-500">{el.country}</p> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className={`h-[40rem] removescrollablesidebar w-full overflow-y-hidden ${className}`}
      ref={containerRef}
      style={{ overflowX: "hidden" }} // Hide horizontal scrollbar
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-2 py-0 px-2">
        <div className="grid gap-6">
          {firstPart.map((el, idx) =>
            renderCard(el, translateFirst, "grid-1", idx)
          )}
        </div>
        <div className="grid gap-6">
          {secondPart.map((el, idx) =>
            renderCard(el, translateSecond, "grid-2", idx)
          )}
        </div>
        <div className="grid gap-6">
          {thirdPart.map((el, idx) =>
            renderCard(el, translateThird, "grid-3", idx)
          )}
        </div>
      </div>
    </div>
  );
};
