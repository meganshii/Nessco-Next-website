"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";

const trustedBrands = [
  { src: "/assets/client-logos/abc-news.png", alt: "Abc-News" },
  { src: "/assets/client-logos/airfrance.png", alt: "Airfrance" },
  { src: "/assets/client-logos/allianz.png", alt: "Allianz" },
  { src: "/assets/client-logos/bbc.png", alt: "BBC" },
  { src: "/assets/client-logos/cnbc.png", alt: "CNBC" },
  { src: "/assets/client-logos/gannett.png", alt: "Gannett" },
  { src: "/assets/client-logos/jaguar.png", alt: "Jaguar" },
  { src: "/assets/client-logos/linkedin.png", alt: "LinkedIn" },
  { src: "/assets/client-logos/telegraph.png", alt: "Telegraph" },
];

const partnerBrands = [
  { src: "/assets/client-logos/abc-news.png", alt: "Abc-News" },
  { src: "/assets/client-logos/airfrance.png", alt: "Airfrance" },
  { src: "/assets/client-logos/allianz.png", alt: "Allianz" },
  { src: "/assets/client-logos/bbc.png", alt: "BBC" },
  { src: "/assets/client-logos/cnbc.png", alt: "CNBC" },
  { src: "/assets/client-logos/gannett.png", alt: "Gannett" },
  { src: "/assets/client-logos/jaguar.png", alt: "Jaguar" },
  { src: "/assets/client-logos/linkedin.png", alt: "LinkedIn" },
  { src: "/assets/client-logos/telegraph.png", alt: "Telegraph" },
];

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto ml-6 flex flex-col relative overflow-hidden mt-0 pt-0">
      <motion.div className="flex flex-row">
        <div className="flex w-[15%] flex-col">
          <div className="text-xl mt-8 font-poppins whitespace-nowrap">
            Trusted By
          </div>
          <div className="text-xl mt-14  font-poppins whitespace-nowrap">
            Partner Brands
          </div>
        </div>
        <div className="w-[83%] mr-4 bg-white">
          <div className="">
            <div className="flex-grow ">
              <InfiniteMovingCards
                items={trustedBrands}
                direction="left"
                speed="slow"
                className="w-full"
              />
            </div>
          </div>
          <div className="">
            <div className="flex-grow ">
              <InfiniteMovingCards
                items={trustedBrands}
                direction="right"
                speed="slow"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col items-center mt-28 text-center">
        <p className="text-xl mx-4 w-[62%] font-poppins leading-8">
          Empowering sustainable packaging with advanced paper-based solutions.
          Our innovative machines drive global CO2 reduction, paving the way for
          a greener earth and elevating your packaging capabilities.
        </p>
      </motion.div>
    </div>
  );
}
