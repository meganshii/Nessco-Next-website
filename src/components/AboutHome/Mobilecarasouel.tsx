"use client";

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Page4Data } from '../Constants/About/ourcompanycarasouel';

const MobileCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Page4Data.imageWithDescription.length);
    }, 9000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50; // Minimum swipe distance to trigger the change

    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Page4Data.imageWithDescription.length);
    } else if (touchStartX - touchEndX < -swipeThreshold) {
      // Swipe right
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + Page4Data.imageWithDescription.length) % Page4Data.imageWithDescription.length
      );
    }
  };

  return (
    <>
    <div className="bg-gray-200 bg-opacity-45 lg:py-[2.5vh] lg:px-[1vw] p-4 rounded-[1rem] overflow-hidden">
    <div
          className="relative h-[30vh] w-full overflow-hidden rounded-md"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
      >
          {Page4Data.imageWithDescription.map((image, index) => (
              <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentIndex ? 'transform translate-x-0' : 'transform translate-x-full'}`}
              >
                  <Image
                      src={image.img}
                      alt={`Slide ${index}`}
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full" />
              </div>
          ))}
      </div>
      </div>
      </>
    
  );
};

export default MobileCarousel;
