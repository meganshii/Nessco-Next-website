// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState,useEffect,useRef } from "react";

// const Grid: React.FC = () => {
//   return (
//     <>
//       <div className=" h-[100vh] w-full bg-black p-10">
//         <div className="grid grid-cols-4 gap-3 h-full w-full relative top-7 ">
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg items-center justify-center">
//             <Image
//               src="/assets/clientele/10.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16  "
//             />
//           </div>
//           <div className=" bg-circular-gradient-red border border-[#262626] rounded-lg f">
//             <Image
//               src="/assets/clientele/11.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/12.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/13.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/14.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/15.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/14.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/10.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-11 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/11.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/15.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/13.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/14.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



// "use client";
// import { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const squareData = [
//   { id: 1, src: "/assets/clientele/10.svg", bgClass: "bg-circular-gradient-blue" },
//   { id: 2, src: "/assets/clientele/11.svg", bgClass: "bg-circular-gradient-red" },
//   { id: 3, src: "/assets/clientele/12.svg", bgClass: "bg-circular-gradient-blue" },
//   { id: 4, src: "/assets/clientele/13.svg", bgClass: "bg-circular-gradient-red" },
//   { id: 5, src: "/assets/clientele/14.svg", bgClass: "bg-circular-gradient-blue" },
//   { id: 6, src: "/assets/clientele/15.svg", bgClass: "bg-circular-gradient-red" },
//   { id: 7, src: "/assets/clientele/10.svg", bgClass: "bg-circular-gradient-blue" },
//   { id: 8, src: "/assets/clientele/11.svg", bgClass: "bg-circular-gradient-red" },
//   { id: 9, src: "/assets/clientele/12.svg", bgClass: "bg-circular-gradient-blue" },
//   { id: 10, src: "/assets/clientele/13.svg", bgClass: "bg-circular-gradient-red" },
//   { id: 11, src: "/assets/clientele/14.svg", bgClass: "bg-circular-gradient-blue" },
//   { id: 12, src: "/assets/clientele/15.svg", bgClass: "bg-circular-gradient-red" },
// ];

// const shuffle = (array: typeof squareData) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className={`border border-[#262626] rounded-lg items-center justify-center ${sq.bgClass}`}
//       style={{ backgroundSize: "cover" }}
//     >
//       <Image
//         src={sq.src}
//         alt={`image-${sq.id}`}
//         width={150}
//         height={150}
//         className="scale-90 relative top-3 left-16"
//       />
//     </motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef<any>(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="h-[100vh] w-full bg-black p-10">
//       <div className="grid grid-cols-4 gap-3 h-full w-full relative top-7">
//         {squares}
//       </div>
//     </div>
//   );
// };

// export default ShuffleGrid;


"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './client.module.css'; // Import CSS module

const squareData = [
  { id: 1, src: "/assets/clientele/10.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 2, src: "/assets/clientele/11.svg", bgClass: "bg-circular-gradient-red" },
  { id: 3, src: "/assets/clientele/12.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 4, src: "/assets/clientele/13.svg", bgClass: "bg-circular-gradient-red" },
  { id: 5, src: "/assets/clientele/14.svg", bgClass: "bg-circular-gradient-red" },
  { id: 6, src: "/assets/clientele/15.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 7, src: "/assets/clientele/10.svg", bgClass: "bg-circular-gradient-red" },
  { id: 8, src: "/assets/clientele/11.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 9, src: "/assets/clientele/12.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 10, src: "/assets/clientele/13.svg", bgClass: "bg-circular-gradient-red" },
  { id: 11, src: "/assets/clientele/14.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 12, src: "/assets/clientele/15.svg", bgClass: "bg-circular-gradient-red" },
];

const getSlidingDirectionClass = () => {
  const directions = [
    styles['animation-slide-in-left'],
    styles['animation-slide-in-right'],
    styles['animation-slide-in-top'],
    styles['animation-slide-in-bottom']
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const generateSquares = (data: typeof squareData) => {
  return data.map((sq) => {
    const animationClass = getSlidingDirectionClass();

    return (
      <div
        key={sq.id}
        className={`relative border border-[#262626] rounded-lg ${sq.bgClass} flex items-center justify-center overflow-hidden`}
      >
        <div className={`absolute inset-0 flex items-center justify-center ${animationClass}`}>
          <Image
            src={sq.src}
            alt={`image-${sq.id}`}
            width={150}
            height={150}
            className="transform transition-transform duration-1000"
          />
        </div>
      </div>
    );
  });
};

const ShuffleGrid = () => {
  const [squares, setSquares] = useState(generateSquares(squareData));

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares(squareData));
    };

    shuffleSquares();
    const interval = setInterval(shuffleSquares, 4000); // Adjust timing to match animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100vh] w-full bg-black p-10">
      <div className="grid grid-cols-4 gap-3 h-full w-full">
        {squares}
      </div>
    </div>
  );
};

export default ShuffleGrid;

