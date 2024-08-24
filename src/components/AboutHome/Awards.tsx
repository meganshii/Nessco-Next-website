// import React from "react";
// import { FC } from "react";
// import Image from "next/image";

// const Awards: FC = () => {
//   return (
//     <div className="relative max-h-screen w-full  bg-white mx-auto ">
//       <h1 className="text-5xl font-bold p-5 font-montserrat text-[#33246e] ml-10 -mt-12">
//         Awards
//       </h1>
//       <div className=" ml-16 mt-10 ">
//         <p className="text-lg -mt-5 text-black font-montserrat">
//           Recognition affirms our purpose, and shows us we’re on the right
//           track. <br />
//           Look through the awards we’ve accumulated, and the certifications that
//           mark the checkpoints ensuring our progress.
//         </p>
//       </div>

//       <div className=" flex text-white  bg-red-400 ">
//         <div className="flex flex-col items-center z-20 text-white ml-14 transform transition-transform duration-300 hover:scale-110 bg-yellow-500">
//           <div
//             className=" flex items-center justify-center font-bold  -mt-[2vh]
//           "
//           >
//             <Image
//               src="/assets/about/award/icon6.svg" // Replace with the path to your image
//               alt="Icon"
//               width={500} // Adjust the width according to your design
//               height={500} // Adjust the height according to your design
//               className="object-cover "
//               style={{ height: "18vh", width: "18vw" }}
//             />
//           </div>
//           <p className="w-[6vw] text-center mt-7 font-bold">
//             ISO 9001 Certified
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 transform transition-transform duration-300 hover:scale-110 z-20  ml-7">
//           <div className="flex items-center justify-center font-bold  -mt-[8vh] ">
//             <Image
//               src="/assets/about/award/icon5.svg" // Replace with the path to your image
//               alt="Icon"
//               width={450} // Adjust the width according to your design
//               height={450} // Adjust the height according to your design
//               className="object-cover  "
//               style={{ height: "18vh", width: "18vw" }}
//             />
//           </div>
//           <p className="w-[6vw] text-center font-bold">
//             RoHS Certified
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 z-20  ml-14  transform transition-transform duration-300 hover:scale-110">
//           <div className="flex items-center justify-center font-bold  -mt-[12vh]">
//             <Image
//               src="/assets/about/award/icon4.svg" // Replace with the path to your image
//               alt="Icon"
//               width={450} // Adjust the width according to your design
//               height={450} // Adjust the height according to your design
//               className="object-cover"
//               style={{ height: "15vh", width: "20vw" }}
//             />
//           </div>
//           <p className="w-[10vw] text-center font-bold  ">
//             Child Labour Free
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 z-20 ml-10 transform transition-transform duration-300 hover:scale-110">
//           <div className=" text-white flex items-center justify-center font-bold -mt-[7vh] ">
//             <Image
//               src="/assets/about/award/icon1.svg"
//               // Replace with the path to your image
//               alt="Icon"
//               width={450} // Adjust the width according to your design
//               height={450} // Adjust the height according to your design
//               className="object-cover"
//               style={{ height: "15vh", width: "17vw" }}
//             />
//           </div>
//           <p className="w-[7vw] text-center font-bold ">
//             Star Export House{" "}
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 ml-7 transform transition-transform duration-300 hover:scale-110 z-20">
//           <div className=" text-white flex items-center justify-center font-bold -mt-[20vh] ">
//             <Image
//               src="/assets/about/award/icon3.svg" // Replace with the path to your image
//               alt="Icon"
//               width={450}
//               height={450} // Adjust the height according to your design
//               className="object-cover"
//               style={{ height: "17vh", width: "15vw" }}
//             />
//           </div>
//           <p className="w-[6vw] text-center font-bold  ml-5 ">
//             CE Certified
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-10 z-20  ml-7 transform transition-transform duration-300 hover:scale-110">
//           <div className=" text-white flex items-center justify-center font-bold -mt-[14vh] ">
//             <Image
//               src="/assets/about/award/icon2.svg" // Replace with the path to your image
//               alt="Icon"
//               width={400} // Adjust the width according to your design
//               height={400} // Adjust the height according to your design
//               className=""
//               style={{ height: "18vh", width: "20vw" }}
//             />
//           </div>
//           <p className="w-[5vw] text-center font-bold">Taxpayers Award</p>
//         </div>
//       </div>

//       {/* <div className="absolute bottom-0 w-full  ">
//         <Image
//           src="/assets/about/bluelayer.svg"
//           alt="Machine 3"
//           width={400}
//           height={100}
//           className=" object-cover w-full min-h-full md:h-[46rem] lg:h-[42rem] sm:h-[48rem]"
//         />
//       </div> */}
//       <div className="absolute bottom-0 w-full h-[90vh]">
//   <Image
//     src="/assets/about/bluelayer.svg"
//     alt="Background Layer"
//     layout="fill"
//     objectFit="cover"
//     className="w-full h-full"
//   />
// </div>
//     </div>
//   );
// };

// export default Awards;

import React from "react";
import { FC } from "react";
import Image from "next/image";

const Awards: FC = () => {
  return(
   <div className="relative w-full  bg-white min-h-screen">
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

       <div className="absolute bottom-0 w-full h-[100vh] bg-red-100 ">
   <Image
     src="/assets/about/bluelayer.svg"
     alt="Background Layer"
     layout="fill"
     objectFit="cover"
     className="w-full h-full z-10"
   />
 </div>

 <div className="flex text-white  mt-16 md:mt-28 lg:mt-36">
  <div className="flex flex-col items-center z-20 text-white ml-4 md:ml-8 lg:ml-14 transform transition-transform duration-300 hover:scale-110 ">
    <div className="flex items-center justify-center font-bold -mt-8 md:-mt-12 lg:-mt-16">
      <Image
        src="/assets/about/award/icon6.svg"
        alt="Icon"
        width={500}
        height={500}
        className="object-cover"
        style={{ height: "20vh", width: "20vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[6vw] text-center font-bold mt-20">
      ISO 9001 Certified
    </p>
  </div>

  <div className="flex flex-col items-center mt-16 md:mt-24 lg:mt-32 transform transition-transform duration-300 hover:scale-110 z-20 ml-4 md:ml-8 lg:ml-7">
    <div className="flex items-center justify-center font-bold -mt-32 md:-mt-40 lg:-mt-36">
      <Image
        src="/assets/about/award/icon5.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover"
        style={{ height: "18vh", width: "18vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[7vw] text-center font-bold mt-20">
      RoHS Certified
    </p>
  </div>

  <div className="flex flex-col items-center mt-16 md:mt-24 lg:mt-32 z-20 ml-4 md:ml-8 lg:ml-14 transform transition-transform duration-300 hover:scale-110">
    <div className="flex items-center justify-center font-bold -mt-12 md:-mt-16 lg:-mt-20">
      <Image
        src="/assets/about/award/icon4.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover"
        style={{ height: "15vh", width: "20vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[8vw] text-center font-bold mt-24">
      Child Labour Free
    </p>
  </div>

  <div className="flex flex-col items-center mt-16 md:mt-24 lg:mt-32 z-20 ml-4 md:ml-8 lg:ml-10 transform transition-transform duration-300 hover:scale-110">
    <div className="text-white flex items-center justify-center font-bold -mt-8 md:-mt-12 lg:-mt-16">
      <Image
        src="/assets/about/award/icon1.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover"
        style={{ height: "15vh", width: "17vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[7vw] text-center font-bold mt-24">
      Star Export House
    </p>
  </div>

  <div className="flex flex-col items-center mt-16 md:mt-24 lg:mt-32 ml-4 md:ml-8 lg:ml-7 transform transition-transform duration-300 hover:scale-110 z-20">
    <div className="text-white flex items-center justify-center font-bold -mt-16 md:-mt-20 lg:-mt-24">
      <Image
        src="/assets/about/award/icon3.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover"
        style={{ height: "17vh", width: "15vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[5vw] text-center font-bold ml-2 mt-10">
      CE Certified
    </p>
  </div>

  <div className="flex flex-col items-center mt-12 md:mt-16 lg:mt-28 z-20 ml-4 md:ml-8 lg:ml-7 transform transition-transform duration-300 hover:scale-110">
    <div className="text-white flex items-center justify-center font-bold -mt-11 md:-mt-16 lg:-mt-[10rem]">
      <Image
        src="/assets/about/award/icon2.svg"
        alt="Icon"
        width={400}
        height={400}
        className="object-cover"
        style={{ height: "22vh", width: "20vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[5vw] text-center font-bold mt-24">
      Taxpayers Award
    </p>
  </div>
</div>




  </div>
  )
};
export default Awards;
