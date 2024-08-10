"use client";

import Image, { StaticImageData } from "next/image";
import styles from "../Styles/style.module.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaIndustry } from "react-icons/fa";
import Link from "next/link";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: StaticImageData;
  url: string;
  color: string;
  expertiseExperience: string;
  expertiseAbout: string;
  icon: string;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  expertiseExperience,
  expertiseAbout,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "start start"],
  // });
  //  to scale image on scroll
  // const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(2vh + ${i * 1}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.description}>
            <div
              style={{
                backgroundColor: color,
              }}
              className={styles.expertiseContainer}
            >
              <FaIndustry className={`${styles.icon} text-white`} size={24} />
              <div className={styles.expertiseText}>
                <div className="font-poppins text-white">{expertiseExperience}</div>
                <div className="text-red-600 font-semibold font-poppins">
                  {expertiseAbout}
                </div>
              </div>
            </div>
            <h2 className="text-center text-xl font-semibold text-white font-poppins">{title}</h2>
            <p className=" mt-6 text-base text-white text-center font-poppins">{description}</p>
            <span className="w-full mt-4  flex flex-row justify-center items-center">
              <Link
                className="text-base text-white font-poppins text-center"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                See more
              </Link>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <motion.div className={styles.imageContainer}>
            <Image fill src={src} alt="image" className={styles.image} />
          </motion.div>
          <div className={styles.imageCorner}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="svg--ca1"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill={color} // Use the color prop here
              ></path>
            </svg>
          </div>
          <div className={styles.imageCorner_second}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="svg--ca1"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill={color}
              ></path>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
