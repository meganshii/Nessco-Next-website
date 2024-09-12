// components/Gallery.tsx
"use client";
import Image from 'next/image';
import { galleryfour } from '../Constants/About/AboutUsPage.json';
import { useEffect, useState } from 'react';
const PinkCity = () => {
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Detect screen size for mobile view
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 704); // Adjust breakpoint if needed
  };
  window.addEventListener('resize', handleResize);
  handleResize(); // Set initial value
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <div className="relative mx-auto lg:h-[90vh] h-full bg-white w-screen">
      <h1 className="lg:text-5xl text-3xl font-bold text-left relative top-[5vh] font-poppins text-[#312465] lg:ml-10 ml-4">{galleryfour.heading}</h1>
      
      <div className="lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 mb-5 lg:p-6 mr-2 mt-[5vh] lg:w-full lg:h-[66vh] p-1">
        {galleryfour.galleryImages.map((item, index) => (
          <div key={index} className="relative lg:h-[58vh] lg:w-[100%]  ">

{!isMobile ? (
            <div className="group relative h-full w-full overflow-hidden">
              
              <Image 
                src={item.src} 
                alt={`Gallery image ${index + 1}`} 
                layout="fill" 
                className="lg:rounded-2xl  lg:object-cover"
              />
          
              <div className="lg:visible invisible absolute inset-0 bg-black transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 group-hover:bg-gradient-to-t from-black to-transparent bg-opacity-0"></div>
              <div className=" absolute left-20 lg:left-0 inset-0 flex flex-col items-center justify-center lg:transition-transform lg:duration-300 lg:transform lg:translate-y-full lg:group-hover:translate-y-0">
                <Image 
                  src="/assets/about/flower.svg" 
                  alt="Overlay Icon" 
                  width={100} 
                  height={50} 
                  className="w-[16rem] h[5rem] -mt-28"
                />
                <p className="text-white -mt-20 lg:text-sm font-bold lg:w-[15rem] text-xs w-35vw] text-center font-poppins">{item.paragraph}</p>
                <Image 
                  src="/assets/about/bottomlayer.svg" 
                  alt="Overlay Icon" 
                  width={100} 
                  height={50} 
                  className="lg:w-[16rem] lg:h[5rem] -mt-36"
                />
                <p className=' lg:visible invisible text-white font-poppins underline decoration-white -mt-16'>Read More</p>
              </div>
            </div>
             ) : (
              // mobileview
              <div className="flex flex-col border border-black h-[25vh] rounded-xl overflow-hidden w-full mb-5 mt-2">
              <div className="flex ">
                <div className="w-2/4">
                  <Image 
                    src={item.src} 
                    alt={`Gallery image ${index + 1}`} 
                 
                    width={300} 
                    height={200} 
                   
                    className="rounded-lg object-cover h-full w-full "
                  />
                </div>
                <div className="w-3/5 flex flex-col justify-text">
                  <Image 
                    src="/assets/about/sustain/upperlayer.svg" 
                    alt="Overlay Icon" 
                    width={100} 
                    height={50} 
                    className=" relative -mt-7 ml-[3rem]"
                  />
                  <p className="text-black  text-xs font-bold font-poppins text-center font-poppins -mt-8">{item.paragraph}</p>
                  <Image 
                    src="/assets/about/sustain/bottomlayer.svg" 
                    alt="Overlay Icon" 
                    width={100} 
                    height={50} 
                    className="-mt-11 ml-[3rem] "
                  />
                  <p className='text-[#312465] mt-2 font-poppins underline decoration-[#312465]'>Read More</p>
                </div>
              </div>
            </div>
          )}
            {index >= 0 && index < galleryfour.galleryImages.length - 1 && (
              <div className="absolute right-[-0.700rem] top-3 h-[55vh] w-[2px] bg-[#2d1f66] lg:visible invisible"></div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-12 relative">
  <div className="relative p-2 text-[#312465] text-center font-poppins text-xl font-bold -top-11">
    <p>Read More</p>
  </div>
  <div className="relative">
    <Image 
      src="/assets/about/layers.svg" 
      alt="Overlay Icon" 
      width={100} 
      height={50} 
      className="relative w-[12rem] h-auto z-10 -mt-44"
    />
  </div>
</div>

    </div>
  );
};

export default PinkCity;
