import { FC } from 'react';
import Image from 'next/image';
import { Carousel } from './carasoul'; // Ensure correct path to Carousel component
import { companyContent } from '../Constants/About/ourcompany/comapny-page'; // Adjust path as needed

const OurCompany: FC = () => {
  return (
    <div className="relative h-[90vh] bg-white text-white flex flex-col items-center">
      {/* Background image */}
      <div className="absolute inset-0">
  <Image
    src="/assets/about/ourcompany/12.svg"
    alt="Background Image"
    layout="fill"
    objectFit="fill"
    objectPosition="center"
    quality={100}
    className="h-full w-full"
  />
</div>     

<div className="absolute inset-0 ml-[85vw] -mt-[60vh]">
  <Image
    src="/assets/about/ourcompany/13.svg"
    alt="Background Image"
    layout="fill"
    objectFit="fill"
    className="h-[10vh] w-[10vw]"
  />
</div> 

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#171033] to-[#300675] opacity-60 z-[-1]"></div> */}

      <h1 className="text-5xl font-bold font-poppins z-10  absolute left-9 text-[#3a2a79] top-[5vh]">{companyContent.title}</h1>

      <div className="flex flex-col items-center w-full absolute top-[15vh] bg-green-400 ">

        <div className="bg-gray-200 bg-opacity-45 rounded-2xl p-3 shadow-lg  w-[50%] absolute -left-5 ">
          <Carousel />
       
        </div>

        <div className=" p-5 flex-1 font-poppins text-lg text-center text-black  w-[45%] items-end justify-end absolute right-14 ">
          <p className="mt-5">
            {companyContent.description}
          </p>
          <button className="text-black py-2 px-4 font-bold underline decoration-3-white font-poppins">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
