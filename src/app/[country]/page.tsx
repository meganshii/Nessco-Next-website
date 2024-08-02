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

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const infiniteCardsRef = useRef<HTMLDivElement>(null);
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const homeMachineRef = useRef<HTMLDivElement>(null);
  const newsFeatureRef = useRef<HTMLDivElement>(null);
  const knowMachineRef = useRef<HTMLDivElement>(null);
  const homeTestimonialRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { text: "Machines", ref: homeMachineRef },
    { text: "About Us", ref: aboutUsRef },
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
        <div className="mx-6 mt-32" ref={aboutUsRef}>
          <AboutUs
            heading={data.heading}
            description={data.description}
            stats={data.stats}
            cards={data.cards}
          />
        </div>
        <div className="mx-6 mt-32" ref={infiniteCardsRef}>
          <InfiniteMovingCardsDemo />
        </div>
        <div className="mx-6 mt-32" ref={knowMoreRef}>
          <KnowMore />
        </div>
        <div className="mx-6 mt-32" ref={homeMachineRef}>
          <HomeMachine />
        </div>
        <div className="mx-6 mt-32" ref={newsFeatureRef}>
          <NewsFeature />
        </div>
        <div className="mx-6 mt-32" ref={knowMachineRef}>
          <KnowMachine />
        </div>
        <div className="mx-6 mt-32" ref={homeTestimonialRef}>
          <HomeTestimonial />
        </div>
      </div>
    </main>
  );
}
