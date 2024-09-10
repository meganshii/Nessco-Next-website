// components/Gallery.tsx

import Image from 'next/image';
import { galleryfour } from '../Constants/About/pinkcity-homepage';
const PinkCity = () => {
  return (
    <div className="relative mx-auto lg:h-[90vh] bg-white w-screen">
      <h1 className="lg:text-5xl text-3xl font-bold text-left relative top-[5vh] font-poppins text-[#312465] lg:ml-10 ml-4">The Pink City</h1>
      
      <div className="lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 mb-5 lg:p-6 p-4 mr-2 mt-[5vh] flex flex-col rounded-lg h-[100vh] lg:w-full lg:h-[66vh]">
        {galleryfour.galleryImages.map((item, index) => (
          <div key={index} className="relative lg:border-none border border-black rounded-2xl w-full h-[30vh] bg-blue-100 lg:h-[58vh] lg:w-[100%] lg:mx-[rem] ">
            <div className="group relative h-full lg:w-full overflow-hidden flex ">
              <div className='lg:w-0  '>
              <Image 
                src={item.src} 
                alt={`Gallery image ${index + 1}`} 
                layout="fill" 
                className="lg:rounded-2xl rounded-lg object-contain lg:object-cover"
              />
              </div>
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
