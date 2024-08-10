"use client";
import React, { useRef } from "react";
import Hero from "@/components/Home/Home";
import AboutUs from "@/components/Home/AboutSection";
import InfiniteMovingCardsDemo from "@/components/Home/MarqueeSection";
import KnowMore from "@/components/Home/LearnMoreSection";
import HomeMachine from "@/components/Home/ProductShowcase";
import NewsFeature from "@/components/Home/NewsFeature";
import KnowMachine from "@/components/Home/ProductDetails";
import {CanvasRevealEffectDemo} from "@/components/Home/CanvasRevealEffectDemo";
import HomeTestimonial from "@/components/Home/TestimonialsSection";
import { data } from "@/components/Constants/Navbar/about-data";
import NavLinksDemo from "@/components/Home/NavLinks";
import { BentoGridSecondDemo } from "@/components/Home/BentoGridSecondDemo";
import VideoCarousel from "@/components/Home/Common/VideoCarousel";

export default function Home() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const infiniteCardsRef = useRef<HTMLDivElement>(null);
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const homeMachineRef = useRef<HTMLDivElement>(null);
  const newsFeatureRef = useRef<HTMLDivElement>(null);
  const knowMachineRef = useRef<HTMLDivElement>(null);
  const homeTestimonialRef = useRef<HTMLDivElement>(null);
  const iotRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { text: "About Us", ref: aboutUsRef },
    { text: "Clientele", ref: infiniteCardsRef },
    { text: "Know More", ref: knowMoreRef },
    { text: "Machines", ref: homeMachineRef },
    { text: "IoT", ref: iotRef },
    { text: "News", ref: newsFeatureRef },
    { text: "Testimonials", ref: homeTestimonialRef },
  ];

  return (
    <main className="bg-[#f2f2f2]">
      <Hero />
      <NavLinksDemo navItems={navItems} />
      <div className="h-full">
        <div id="aboutUs" className="mx-4 mt-32" ref={aboutUsRef}>
          <AboutUs
            heading={data.heading}
            description={data.description}
            stats={data.stats}
            cards={data.cards}
          />
        </div>
        <div id="clientele" className="mx-4 mt-32" ref={infiniteCardsRef}>
          <InfiniteMovingCardsDemo />
        </div>
        <div id="knowMore" className="mx-4 mt-32" ref={knowMoreRef}>
          <KnowMore />
        </div>
        <div id="machines" className="mt-32" ref={homeMachineRef}>
          <HomeMachine />
        </div>
        <div id="iot" className="mx-6 mt-32" ref={iotRef}>
          <h4 className="text-xl text-center lg:text-2xl font-poppins lg:leading-tight text-black dark:text-white">
            IoT <span className="text-red-500 font-bold">System</span>
          </h4>
          <BentoGridSecondDemo />
        </div>
        <div id="news" className="mx-4 mt-32" ref={newsFeatureRef}>
          <NewsFeature />
        </div>
        <div id="knowMachine" className="mx-4 mt-32" ref={knowMachineRef}>
           <CanvasRevealEffectDemo/>
        </div>
        <div
          id="testimonials"
          className="relative mt-20 bg-gradient-to-l  via-purple-200 to-transparent h-screen overflow-hidden"
          ref={homeTestimonialRef}
        >
          <div className="absolute"></div>
          <div className="relative mx-8 z-20">
            <HomeTestimonial />
          </div>
        </div>
      </div>
    </main>
  );
}