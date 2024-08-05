"use client";
import React, { useRef } from "react";
import Hero from "@/components/Home/Home";
import AboutUs from "@/components/Home/AboutSection";
import InfiniteMovingCardsDemo from "@/components/Home/MarqueeSection";
import KnowMore from "@/components/Home/LearnMoreSection";
import HomeMachine from "@/components/Home/ProductShowcase";
import NewsFeature from "@/components/Home/NewsFeature";
import KnowMachine from "@/components/Home/ProductDetails";
import HomeTestimonial from "@/components/Home/TestimonialsSection";
import { data } from "@/components/Constants/Navbar/about-data";
import NavLinksDemo from "@/components/Home/NavLinks";
import { BentoGridSecondDemo } from "@/components/Home/BentoGridSecondDemo";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const infiniteCardsRef = useRef<HTMLDivElement>(null);
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const homeMachineRef = useRef<HTMLDivElement>(null);
  const newsFeatureRef = useRef<HTMLDivElement>(null);
  const knowMachineRef = useRef<HTMLDivElement>(null);
  const homeTestimonialRef = useRef<HTMLDivElement>(null);
  const iotRef =useRef<HTMLDivElement>(null);
  const navItems = [
    { text: "Machines", ref: homeMachineRef },
    { text: "About Us", ref: aboutUsRef },
    {text:"Iot",ref:iotRef},
    { text: "News", ref: newsFeatureRef },
    { text: "Brands", ref: knowMoreRef },
    { text: "Clientele", ref: infiniteCardsRef },
    { text: "Testimonials", ref: homeTestimonialRef },
  ];

  return (
    <main className="bg-[#f2f2f2]">
      <Hero
        refs={{
          heroRef,
          aboutUsRef,
          infiniteCardsRef,
          knowMoreRef,
          homeMachineRef,
          newsFeatureRef,
          knowMachineRef,
          homeTestimonialRef,
        }}
      />
      <NavLinksDemo navItems={navItems} />
      <div className="h-full">
        <div className="mx-4 mt-32" ref={aboutUsRef}>
          <AboutUs
            heading={data.heading}
            description={data.description}
            stats={data.stats}
            cards={data.cards}
          />
        </div>
        <div className="mx-4 mt-32" ref={infiniteCardsRef}>
          <InfiniteMovingCardsDemo />
        </div>
        <div className="mx-4 mt-32" ref={knowMoreRef}>
          <KnowMore />
        </div>
        <div className="mx-4 mt-32" ref={homeMachineRef}>
          <HomeMachine />
        </div>
        <div className="mx-6 mt-32" ref={iotRef}>
        <h4 className="text-xl text-center lg:text-2xl font-poppins lg:leading-tight text-black dark:text-white">
          Iot <span className="text-red-500 font-bold">System</span>
        </h4>
          <BentoGridSecondDemo/>
        </div>
        <div className="mx-4 mt-32" ref={newsFeatureRef}>
          <NewsFeature />
        </div>
        <div className="mx-4 mt-32" ref={knowMachineRef}>
          <KnowMachine />
        </div>
        <div className="mx-4 mt-32" ref={homeTestimonialRef}>
        <h4 className="text-3xl text-center lg:text-5xl font-montserrat lg:leading-tight font-bold text-black dark:text-white">
          Testimonials
        </h4>
          <HomeTestimonial />
        </div>
      </div>
    </main>
  );
}
