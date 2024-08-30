// components/Gallery.tsx

import Image from 'next/image';
import { galleryContent } from '../Constants/pinkcity/photocolag-page';

const Gallery = () => {
  return (
    <div className="relative lg:mx-auto lg:p-44 lg:mt-[32rem] p-10 -top-[20rem] lg:h-full  lg:-mb-[20rem]">
      <div className="flex justify-center lg:visible invisible">
        <Image 
          src={galleryContent.topStrokeImg}
          alt="Stroke"
          layout="fill"
          className=' -mt-14 '
        />
      </div>

      <div className="grid  lg:grid-cols-4 grid-cols-2  lg:gap-5 gap-6   ">
        {galleryContent.galleryImages.map((src, index) => (
          <div key={index} className="relative lg:h-56 h-[18vh] w-[38vw] lg:w-[17vw] rounded-2xl overflow-hidden  bg-pink-100  lg:left-0">
            <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className=''/>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-2 lg:visible invisible">
        <Image 
          src={galleryContent.bottomStrokeImg}
          alt="Stroke"
          layout="fill"
          className=''
        />
      </div>
    </div>
  );
};

export default Gallery;
