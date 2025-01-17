
import Image from 'next/image';
import { landingPageContent } from '../Constants/pinkcity/PinkcityPage.json'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col p-5  min-h-screen lg:p-6 lg:h-screen ">
      {/* Background Image Container */}
      <div className="relative w-full lg:h-[70vh]  lg:mt-10 mt-16 lg:left-0 h-[80vh] ">
        <Image
          src={landingPageContent.backgroundImg}
          alt="Jaipur"
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
          className="rounded-lg lg:rounded-2xl"
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[30rem] bg-gradient-to-t from-black to-transparent rounded-b-lg lg:invisible"></div>
      </div>

      {/* Title */}
      <div className='w-full absolute top-[58vh] justify-center text-center right-0 lg:relative lg:-top-10 lg:w-0  lg:-mt-52 lg:left-12'>
      <h2 className="    font-alexBrush text-white text-8xl lg:text-9xl ">
        Jaipur
      </h2>
      </div>

      {/* Content Section */}
      <div className="w-full lg:max-w-screen-xl flex flex-col items-center mt-20 lg:mt-7 relative">
        {/* Corner Image */}
        <div className="absolute lg:left-0 lg:bottom-0 lg:visible invisible -ml-56 lg:-ml-20 lg:-mb-7 lg:mt-0 -mt-20">
          <Image
            src={landingPageContent.cornerLayerImg}
            alt="Stroke"
            width={300}
            height={300}
          />
        </div>

        {/* Description and Sticker Section */}
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-full">
          {/* Description */}
          <div className="flex-1 text-center lg:ml-5 lg:mt-9 absolute -top-56 lg:relative lg:top-0">
            <p className="text-white lg:text-black font-poppins lg:text-sm text-sm lg:w-[30vw] w-[80vw] ">
              {landingPageContent.description}
            </p>
          </div>

          {/* Sticker Image */}
          <div className="absolute lg:relative bottom-24 flex-shrink-0 lg:-mt-24 lg:top-0  lg:mr-72 p-32 lg:p-0">
            <div className="lg:w-full lg:h-full h-full w-full lg:ml-0 lg:mt-0">
              <Image
                src={landingPageContent.stickerImg}
                alt="The Pink City"
                width={420}
                height={180}
              />
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1 flex-row lg:-mt-24 mt-44  lg:w-[10vw] lg:h-0 h-10 w-full ">
            <h2 className="font-poppins text-xl lg:text-5xl lg:mt-0 -mt-64 lg:-ml-[18rem] h-[6vh] w-full flex justify-between lg:text-center text-left lg:flex-col lg:w-[30vw] ">
              {landingPageContent.title}{' '}
              <span className="font-alexBrush text-red-800 text-3xl lg:text-8xl lg:ml-0  relative lg:left-0 text-right  ">
                {landingPageContent.subtitle}
              </span>
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
























