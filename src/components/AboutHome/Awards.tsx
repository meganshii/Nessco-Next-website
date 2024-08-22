import React from "react";
import { FC } from "react";
import Image from "next/image";

const Awards: FC = () => {
  return (
    <div className="relative min-h-screen w-full  bg-white h-screen">
      <h1 className="text-5xl font-bold p-5 font-montserrat text-[#33246e] ml-10 -mt-12">
        Awards
      </h1>
      <div className=" ml-16 mt-10 ">
        <p className="text-lg -mt-5 text-black font-montserrat">
          Recognition affirms our purpose, and shows us we’re on the right
          track. <br />
          Look through the awards we’ve accumulated, and the certifications that
          mark the checkpoints ensuring our progress.
        </p>
      </div>

      <div className="relative  flex text-white md:mt-[11rem]">

        <div className="flex flex-col items-center z-20 text-white ml-14 transform transition-transform duration-300 hover:scale-110">
          <div className=" flex items-center justify-center font-bold  -mt-[2rem]
          ">
            <Image
              src="/assets/about/award/icon6.svg" // Replace with the path to your image
              alt="Icon"
              width={500} // Adjust the width according to your design
              height={500} // Adjust the height according to your design
              className="object-cover "  style={{height:"18rem", width:"18rem"}}
            />
          </div>
          <p className="w-[5rem] text-center  -mt-9 font-bold">ISO 9001 Certified</p>
        </div>

        <div className="flex flex-col items-center mt-32 transform transition-transform duration-300 hover:scale-110 z-20  ml-7">
          <div className="flex items-center justify-center font-bold  -mt-[8rem] ">
            <Image
              src="/assets/about/award/icon5.svg" // Replace with the path to your image
              alt="Icon"
              width={450} // Adjust the width according to your design
              height={450} // Adjust the height according to your design
              className="object-cover  "  style={{height:"18rem", width:"18rem"}}
            />
          </div>
          <p className="w-[5rem] text-center font-bold -mt-10 ">RoHS Certified</p>
        </div>

        <div className="flex flex-col items-center mt-32 z-20  ml-14  transform transition-transform duration-300 hover:scale-110">
          <div className="flex items-center justify-center font-bold  -mt-12 ">
            <Image
              src="/assets/about/award/icon4.svg" // Replace with the path to your image
              alt="Icon"
              width={450} // Adjust the width according to your design
              height={450} // Adjust the height according to your design
              className="object-cover"  style={{height:"15rem", width:"20rem"}}
            />
          </div>
          <p className="w-[7rem] text-center font-bold -mt-3 ">Child Labour Free</p>
        </div>

        <div className="flex flex-col items-center mt-32 z-20 ml-10 transform transition-transform duration-300 hover:scale-110">
          <div className=" text-white flex items-center justify-center font-bold -mt-7 ">
            <Image
              src="/assets/about/award/icon1.svg"
               // Replace with the path to your image
              alt="Icon"
              width={450} // Adjust the width according to your design
              height={450} // Adjust the height according to your design
              className="object-cover" style={{height:"15rem", width:"17rem"}}
            />
          </div>
          <p className="w-[6rem] text-center font-bold -mt-3 ">Star Export House </p>
        </div>

        <div className="flex flex-col items-center mt-32 ml-7 transform transition-transform duration-300 hover:scale-110 z-20">
          <div className=" text-white flex items-center justify-center font-bold -mt-20 ">
            <Image
              src="/assets/about/award/icon3.svg" // Replace with the path to your image
              alt="Icon"
              width={450}
              height={450} // Adjust the height according to your design
              className="object-cover"  style={{height:"17rem", width:"15rem"}}
            />
          </div>
          <p className="w-[5rem] text-center font-bold -mt-4 ml-5 ">CE Certified</p>
        </div>

        <div className="flex flex-col items-center mt-10 z-20  ml-7 transform transition-transform duration-300 hover:scale-110">
          <div className=" text-white flex items-center justify-center font-bold -mt-14 ">
            <Image
              src="/assets/about/award/icon2.svg" // Replace with the path to your image
              alt="Icon"
              width={400} // Adjust the width according to your design
              height={400} // Adjust the height according to your design
              className="" style={{height:"18rem", width:"20rem"}}
            />
          </div>
          <p className="w-[5rem] text-center font-bold -mt-6">Taxpayers Award</p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-auto ">
        <Image
          src="/assets/about/bluelayer.svg"
          alt="Machine 3"
          width={400}
          height={100}
          className=" object-cover w-full md:h-full " style={{height:'42rem'}}
        />
      </div>
    </div>
  );
};

export default Awards;
