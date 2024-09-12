
import React from "react";
import { FC } from "react";
import Image from "next/image";
import {awards,Awardheading} from "../Constants/About/AboutUsPage.json"


const Awards: FC = () => {
  return (
    <div className="relative w-full bg-white min-h-svh">
      <h1 className="lg:text-5xl text-3xl font-bold p-5 font-montserrat text-[#33246e] lg:ml-10 lg:-mt-12">
        {Awardheading.title}
      </h1>
      <div className="lg:ml-16 lg:mt-10 mt-5 ml-5">
        <p className="lg:text-lg -mt-5 text-black font-poppins">
        {Awardheading.description}
        </p>
      </div>

      <div className="grid grid-cols-3 lg:flex gap-4 lg:mt-20 p-2 mt-10">
        {awards.map((award) => (
          <div
            key={award.id}
            className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:text-red-500 -mt-2"
          >
            <div className="flex items-center justify-center font-bold">
              <Image
                src={award.image}
                alt={award.title}
                width={500}
                height={500}
                className="object-cover h-[10rem] w-[10rem]"
              />
            </div>
            <p className="lg:w-[10vw] lg:mt-4 text-center font-bold">{award.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Awards;




