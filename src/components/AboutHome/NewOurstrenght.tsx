"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { data } from "../Constants/Navbar/about-data";
import { IoAddCircle } from "react-icons/io5";
import { FaCircleMinus } from "react-icons/fa6";

type Card = {
  video: string;
};

type ExampleComponentProps = {
  active: Card;
  cards: Card[];
};

const truncateText = (text: string, maxWords: number) => {
  const wordsArray = text.split(" ");
  if (wordsArray.length > maxWords) {
    return wordsArray.slice(0, maxWords).join(" ") + "...";
  }
  return text; // Return full text if it's within the limit
};

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const maxWordsForMobile = 10;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    setActive(null);
  };

  useEffect(() => {
    cards.forEach((card) => {
      const preloadimg = new window.Image();
      preloadimg.src = card.video;
    });
  }, [cards]);

  return (
    <div className="lg:h-full h-screen w-full bg-white overflow-hidden">
      <h2 className="lg:text-5xl text-3xl font-bold text-[#3a2a79] mb-4 top-6 font-poppins relative left-9">
        Our Strenght
      </h2>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex relative top-[61vh] left-[36vw] lg:hidden items-center justify-center  rounded-full h-10 w-10"
              onClick={handleClose}
            >
          <FaCircleMinus className="text-[#3a2a79]" size={30} />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[90vw] lg:w-[27vw]  lg:h-[80vh]  md:max-h-[63%] lg:mt-20 -mt-44  flex flex-col bg-[#f7f7f7] dark:bg-neutral-900 sm:rounded-3xl overflow-hidden rounded-xl"
            >
              <div className="relative w-full h-52 lg:h-44 sm:rounded-tr-lg sm:rounded-tl-lg overflow-hidden">
                {/* Background video */}
                <Image
                  src={active.video}
                  alt="gif"
                  width={100}
                  height={100}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Title */}
                <h1 className="absolute bottom-5 left-0 right-0 text-center font-bold text-lg text-white z-10">
                  {active.title}
                </h1>

                {/* Overlay image */}
                <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-20 h-20 sm:rounded-lg object-cover invert"
                  />
                </motion.div>
              </div>

              <div className="">
                <div className="pt-4 relative p-12 top-10 text-center">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" lg:p-12 lg:space-y-3 grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:flex-col p-5 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className=" lg:flex flex  flex-col-reverse lg:flex-row justify-between items-center bg-[#f7f7f7] dark:hover:bg-neutral-800 rounded-lg cursor-pointer group lg:w-full lg:h-full h-[40vh]"
          >
            <div className="md:flex gap-4 flex-col lg:flex-row lg:p-6 grid grid-cols-1 sm:grid-cols-2 ">
              <div className=" col-span-1">
                {/* <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-black text-center md:text-left lg:w-[70vw] lg:text-lg text-xs w-[45vw] lg:px-0 px-2"
                >
                  {" "}
                  <span className="lg:text-md font-bold text-[#3a2a79] font-poppins">
                    {card.title}
                  </span>
                  {card.description}
                </motion.p> */}

<motion.p
  layoutId={`description-${card.description}-${id}`}
  className="text-black text-center md:text-left lg:w-[70vw] lg:text-lg text-xs w-[45vw] lg:px-0 px-2"
>
  {/* Title */}
  <span className="text-center lg:text-left lg:text-md text-lg lg:-mt-0 relative lg:-top-0 -top-8 font-bold lg:text-[#3a2a79] text-black  block">
    {card.title}
  </span>

  {/* Paragraph */}
  <span className="block">
    {/* Conditionally render a shorter version on mobile */}
    <span className="block lg:hidden relative -top-7">
          {/* Use utility function to truncate text */}
          {truncateText(card.description, maxWordsForMobile)}
        </span>

    {/* Full description for larger screens */}
    <span className="hidden lg:block">{card.description}</span>
  </span>
  <IoAddCircle className="relative left-[31vw] block lg:hidden text-[#3a2a79]" size={30} />
</motion.p>


                <div className=" lg:visible invisible relative -left-5 top-[4.5vh] h-[2px] w-[55vh] bg-[#2d1f66] rounded-sm"></div>
              </div>
            </div>
            <div className="flex lg:space-x-8 lg:ml-24 ">
              <div className=" lg:visible invisible relative left-5  w-[2px] bg-[#2d1f66] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                key={index}
                className="w-full lg:p-5 h-full flex items-center justify-center  lg:group-hover:bg-[#000088] lg:rounded-tr-lg lg:rounded-br-lg transition-colors duration-300 p-7 "
              >
                <Image
                  src={card.src}
                  alt="svg"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full group-hover:filter-white transition-transform duration-300"
                />
              </div>

              <style jsx>{`
                .filter-white {
                  filter: invert(1) brightness(0) contrast(100%);
                }
              `}</style>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "We leverage cutting-edge technology to design and manufacture advanced paper cup machines, ensuring high efficiency and precision in production.",
    title: "Innovative Technology: ",
    src: "/assets/about/ourcompany/16.svg",
    video: "/assets/lowgif.gif",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          We leverage cutting-edge technology to design and manufacture advanced
          paper cup machines, ensuring high efficiency and precision in
          production.
        </p>
      );
    },
  },
  {
    description:
      "Our stringent quality control processes guarantee that every machine we produce meets the highest industry standards, delivering reliable and consistent performance.",
    title: "Quality Assurance: ",
    src: "/assets/about/ourcompany/17.svg",
    video: "/assets/giftwo.gif",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience.
        </p>
      );
    },
  },

  {
    description:
      "We prioritize our customers' needs by offering personalized solutions and exceptional after-sales support, fostering long-term partnerships.",
    title: "Customer-Centric Approach: ",
    src: "/assets/about/ourcompany/18.svg",
    video: "/assets/gifthree.gif",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience.
        </p>
      );
    },
  },
  {
    description:
      "Dedicated to environmental responsibility, we focus on producing eco-friendly machines that help businesses reduce their carbon footprint and promote sustainable practices.",
    title: "Sustainability Commitment: ",
    src: "/assets/about/ourcompany/19.svg",
    video: "/assets/giffour.gif",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry.
        </p>
      );
    },
  },
];
