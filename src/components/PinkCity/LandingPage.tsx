// pages/LandingPage.tsx
import Image from 'next/image';
import { landingPageContent } from '../Constants/pinkcity/LandingPage'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center h-screen p-6">
      <div className="relative w-full  p-6 top-12 h-[68vh]">
        <Image
          src={landingPageContent.backgroundImg}
          alt="Jaipur"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="w-full max-w-screen-xl flex flex-col items-center relative">
        <div className="flex justify-left bottom-0 absolute left-0 -ml-20 -mb-7">
          <Image 
            src={landingPageContent.cornerLayerImg}
            alt="Stroke"
            width={300}
            height={300}
          />
        </div>
        <div className="flex w-full items-center ml-5">
          <div className="flex-1 text-center ml-5 mt-16">
            <p className="text-black text-sm font-montserrat">
              {landingPageContent.description}
            </p>
          </div>
          <div className="flex-shrink-0 z-10 -mt-24">
            <div className="text-white">
              <Image
                src={landingPageContent.stickerImg}
                alt="The Pink City"
                width={420}
                height={180}
              />
            </div>
          </div>
          <div className="flex-1 text-center mt-9">
            <h2 className="text-5xl font-poppins">
              {landingPageContent.title} <span className="font-alexBrush text-8xl text-red-800">{landingPageContent.subtitle}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
