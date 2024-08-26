// components/Gallery.tsx

import Image from 'next/image';
import { galleryContent } from '../Constants/pinkcity/photocolag-page';

const Gallery = () => {
  return (
    <div className="relative mx-auto p-44 mt-10">
      <div className="flex justify-center ">
        <Image 
          src={galleryContent.topStrokeImg}
          alt="Stroke"
          layout="fill"
          className=' -mt-14 '
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {galleryContent.galleryImages.map((src, index) => (
          <div key={index} className="relative h-56 rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className=''/>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-2 ">
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
