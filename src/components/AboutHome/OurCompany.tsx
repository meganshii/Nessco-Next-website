import { FC } from 'react';
import Image from 'next/image';
import { Carousel } from './carasoul'; // Ensure correct path to Carousel component
import { companyContent } from '../Constants/About/ourcompany/comapny-page'; // Adjust path as needed

const OurCompany: FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#171033] to-[#300675] text-white flex flex-col items-center py-12">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/assets/about/1.svg')] bg-cover bg-center mt-10"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171033] to-[#300675] opacity-60 z-[-1]"></div>
      <h1 className="text-5xl font-bold font-montserrat mr-[55rem] z-10">{companyContent.title}</h1>
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-12 ">
        <div className="bg-white rounded-2xl p-5 shadow-lg w-full md:w-3/5 mb-6 md:mb-0 h-[28rem] -ml-16 z-10 -mt-5">
          <Carousel />
        </div>
        <div className="md:ml-8 p-5 flex-1 font-montserrat text-lg text-center">
          <p className='mt-5'>
            {companyContent.description}
          </p>
          <button className="text-white py-2 px-4 font-bold underline decoration-3-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
