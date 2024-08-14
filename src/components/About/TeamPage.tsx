"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TeamPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (video && container) {
      gsap.registerPlugin(ScrollTrigger);

      const updateVideoTime = () => {
        const duration = video.duration;
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        const videoTime = duration * scrollFraction;
        video.currentTime = videoTime;
      };

      window.addEventListener('scroll', updateVideoTime);

      return () => {
        window.removeEventListener('scroll', updateVideoTime);
      };
    }
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden" ref={containerRef}>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-4/5 mt-8 object-cover"
        src="/assets/about/team.mp4"
        muted
        playsInline
      />
      <div className="absolute top-12 w-full text-center z-10 mt-5">
        <h1 className="text-4xl font-montserrat text-white">
          Meet The <span className="text-rose-500">Team </span>
        </h1>
      </div>
      <div className="relative text-white flex flex-col items-center justify-end h-full pb-5">
        <h1 className="text-4xl font-montserrat ">
          &quot;Build with Unity &amp; Trust&quot;
        </h1>
      </div>
    </div>
  );
}
