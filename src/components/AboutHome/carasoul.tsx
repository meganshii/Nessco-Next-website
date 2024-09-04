import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 due to the duplicated image logic

  // Manually defined image width
  const imageWidth = 350; // You can set this to your desired value
  const imageHeight = 350; // Set the height to match your design

  const images = [
    { src: '/assets/about/16.png', alt: 'Image 3' },
    { src: '/assets/about/17.png', alt: 'Image 4' },
    { src: '/assets/about/nessco-team.webp', alt: 'Image 6' },
    { src: '/assets/about/17.png', alt: 'Image 4' },
    { src: '/assets/about/nessco-team.webp', alt: 'Image 6' },
  ];

  // Duplicating the first and last images to create a loop effect
  const imagesWithDupes = [
    images[images.length - 1], // Duplicate the last image
    ...images,
    images[0] // Duplicate the first image
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      gsap.to(carousel, {
        x: -currentIndex * imageWidth, // Move by the manually set width of the image
        duration: 1, // Smooth transition duration
        ease: 'power1.inOut', // Smooth easing
      });
    }
  }, [currentIndex, imageWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= imagesWithDupes.length - 1) {
        setTimeout(() => {
          setCurrentIndex(1); // Reset to the first actual image
        }, 1000); // Match the transition duration
        return imagesWithDupes.length - 1; // Transition to the last duplicate
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        setTimeout(() => {
          setCurrentIndex(imagesWithDupes.length - 2); // Reset to the last actual image
        }, 1000); // Match the transition duration
        return 0; // Transition to the first duplicate
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="relative overflow-hidden w-full">
      <IoIosArrowBack 
        className="absolute left-3 top-1/2 transform -translate-y-1/2  text-black shadow-md rounded-full backdrop-blur-lg  z-10"
        size={30}
        onClick={handlePrev}
      />
        
      <IoIosArrowForward
        className="absolute right-[0.100vw] top-1/2 transform -translate-y-1/2 text-black rounded-full shadow-md backdrop-blur-lg z-10"
        size={30}
        onClick={handleNext}
      />

      <div
        ref={carouselRef}
        className="flex whitespace-nowrap transition-transform duration-1000 gap-5"
        style={{ width: imagesWithDupes.length * imageWidth }}
      >
        {imagesWithDupes.map((image, index) => (
          <div key={index} style={{ width: imageWidth, height: imageHeight }} className="flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={imageWidth}
              height={imageHeight}
              className="rounded-2xl transition-transform duration-1000 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
