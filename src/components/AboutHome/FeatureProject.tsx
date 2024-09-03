// import Image from 'next/image';
// import React, { FC, useState } from 'react';
// import { Machine, machines } from '../Constants/About/featureproject-homepage'; // Adjust the import path as needed

// const FeatureProject: FC = () => {
//   const [selectedMachine, setSelectedMachine] = useState<Machine>(machines[0]);

//   const handleMachineClick = (machine: Machine) => {
//     setSelectedMachine(machine);
//   };

//   return (
//     <div className="relative flex flex-col w-full h-[130vh] bg-white ">
//       <h1 className="text-5xl font-bold text-[#33246e] font-poppins mt-5 ml-[2rem]">Featured Projects</h1>
//       <div className="flex flex-col lg:flex-row items-center mt-12 ">
//   <h2 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-gray-400 lg:ml -mt-10 relative left-6">
//     {selectedMachine.title}
//   </h2>

//   <div className="relative flex justify-center mt-8 lg:mt-0">
//     <Image
//       src={selectedMachine.mainImage}
//       alt={selectedMachine.title}
//       width={400}
//       height={400}
//       className="object-cover z-20 h-[18rem] sm:h-[20rem] lg:h-[21rem] w-[22rem] sm:w-[24rem] lg:w-[25rem]  ml-[15vw]"
//     />
//   </div>

//   <div className=" w-[35vw] z-10 p-5 justify-text text-center relative -top-4 font-poppins  right-3">
//     <p className="text-sm text-gray-600">
//       {selectedMachine.description}
//     </p>
//   </div>
// </div>


//       {/* Horizontal Line */}
//       <div className="relative w-full h-1 bg-[#3a2a79] -mt-32">
//         {/* Vertical Lines */}
//         <div className="relative w-full flex justify-around">
//           {machines.map((machine) => (
//             <div key={machine.id} className="relative flex justify-center">
//               <div className="w-[0.10rem] bg-[#b0aac5] h-[30rem] mask-gradient-featuredproject"></div>
//               <div
//                 className={`border-2 border-x-gray-200 h-[9rem] rounded-2xl transform transition-transform duration-300 hover:scale-110 ${machine.id === 1 ? 'mt-28' : machine.id === 2 ? 'mt-10' : machine.id === 3 ? 'mt-32' : machine.id === 4 ? 'mt-16' : machine.id === 5 ? 'mt-32' : 'mt-5'} -ml-${machine.id === 1 ? 5 : machine.id === 2 ? 8 : machine.id === 3 ? 24 : machine.id === 4 ? 20 : machine.id === 5 ? 24 : 20} z-20 bg-white cursor-pointer ${selectedMachine.id === machine.id ? '-ml-7 ' : '-ml-10'}`}
//                 onClick={() => handleMachineClick(machine)}
//               >
//                 <Image
//                   src={machine.mainImage}
//                   alt={machine.title}
//                   width={200}
//                   height={200}
//                   className="object-cover h-[9rem] w-[9rem] -mt-2"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button className="mt-[20rem] ml-[34rem] px-5 py-2 items-center justify-center text-center bg-gradient-to-b from-[#171033] to-[#300675] text-white rounded-md z-10 w-[8rem]">
//         Read More
//       </button>
//     </div>
//   );
// };

// export default FeatureProject;



import Image from 'next/image';
import React, { FC, useState, useEffect, useRef } from 'react';
import { Machine, machines } from '../Constants/About/featureproject-homepage'; // Adjust the import path as needed
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureProject: FC = () => {
  const [selectedMachine, setSelectedMachine] = useState<Machine>(machines[0]);

  const horizontalLineRef = useRef<HTMLDivElement | null>(null);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMachineClick = (machine: Machine) => {
    setSelectedMachine(machine);
  };

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalLineRef.current,
        start: 'top 80%',
        once: true, // Trigger the animation only once
      },
    });

    // Animate the horizontal line
    tl.fromTo(
      horizontalLineRef.current,
      { width: 0 },
      {
        width: '100%',
        duration: 3,
        ease: 'power3.out',
      }
    );

    // Animate the vertical lines and images after the horizontal line animation
    verticalLinesRef.current.forEach((line, index) => {
      if (line) {
        tl.fromTo(
          line,
          { y: 0, height: 0 }, // Start off-screen (above)
          {
            y: 0, // Slide into view
            height: '30rem',
            z:10,
            duration: 2, // 3-second duration for smooth transition
            ease: 'power3.out',
            delay: index * 0.2, // Staggered delay based on index for visual effect
          },
          "-=2" // Start animation for vertical lines 2 seconds before the horizontal line animation ends
        );

        const image = imagesRef.current[index];
        if (image) {
          tl.fromTo(
            image,
            { y: 10, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              ease: 'power3.out',
            },
            "-=2" // Start animation for images 2 seconds before the vertical lines animation ends
          );
        }
      }
    });
  }, []);



  return (
    <div className="relative flex flex-col w-full h-[130vh] bg-white">
      <h1 className="text-5xl font-bold text-[#33246e] font-poppins mt-5 ml-[2rem]">Featured Projects</h1>
      <div className="flex flex-col lg:flex-row items-center mt-12">
        <h2 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-gray-400 lg:ml -mt-10 relative left-6">
          {selectedMachine.title}
        </h2>

        <div className="relative flex justify-center mt-8 lg:mt-0">
          <Image
            src={selectedMachine.mainImage}
            alt={selectedMachine.title}
            width={400}
            height={400}
            className="object-cover z-20 h-[18rem] sm:h-[20rem] lg:h-[21rem] w-[22rem] sm:w-[24rem] lg:w-[25rem] ml-[15vw] "
          />
        </div>

        <div className="w-[35vw] z-10 p-6 justify-text text-center relative -top-4 font-poppins right-10">
          <p className="text-sm text-gray-600">{selectedMachine.description}</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <div ref={horizontalLineRef} className="relative w-full h-1 bg-[#3a2a79] -mt-32  ">
        {/* Vertical Lines */}
        <div className="relative w-full flex justify-around   ">
          {machines.map((machine, index) => (
            <div key={machine.id} className="relative flex justify-center ">
              <div
                ref={(el) => (verticalLinesRef.current[index] = el)}
                className="w-[0.10rem] bg-[#b0aac5] h-[30rem] mask-gradient-featuredproject  relative opacity-25 "
              ></div>
              <div
                ref={(el) => (imagesRef.current[index] = el)}
                className={`border-2 border-x-gray-200 h-[9rem] rounded-2xl transform transition-transform duration-300 hover:scale-110 ${
                  machine.id === 1
                    ? 'mt-28'
                    : machine.id === 2
                    ? 'mt-10'
                    : machine.id === 3
                    ? 'mt-32'
                    : machine.id === 4
                    ? 'mt-16'
                    : machine.id === 5
                    ? 'mt-32'
                    : 'mt-5'
                } -ml-${
                  machine.id === 1
                    ? 5
                    : machine.id === 2
                    ? 8
                    : machine.id === 3
                    ? 24
                    : machine.id === 4
                    ? 20
                    : machine.id === 5
                    ? 24
                    : 20
                } z-20 bg-white cursor-pointer ${
                  selectedMachine.id === machine.id ? '-ml-7 ' : '-ml-10'
                }`}
                onClick={() => handleMachineClick(machine)}
              >
                <Image
                  src={machine.mainImage}
                  alt={machine.title}
                  width={200}
                  height={200}
                  className="object-cover h-[9rem] w-[9rem] -mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-[20rem] ml-[34rem] px-5 py-2 items-center justify-center text-center bg-gradient-to-b from-[#171033] to-[#300675] text-white rounded-md z-10 w-[8rem]">
        Read More
      </button>
    </div>
  );
};

export default FeatureProject;

