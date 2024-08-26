
// import Image from 'next/image';
// import { landingPageContent } from '../Constants/pinkcity/LandingPage'

// const LandingPage = () => {
//   return (
//     <div className="bg-gray-100 flex flex-col items-center h-screen p-6">
//       <div className="relative w-full  p-6 top-12 h-[68vh]">
//         <Image
//           src={landingPageContent.backgroundImg}
//           alt="Jaipur"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-2xl"
//         />
//       </div>
//       <div className="w-full max-w-screen-xl flex flex-col items-center relative">
//         <div className="flex justify-left bottom-0 absolute left-0 -ml-20 -mb-7">
//           <Image 
//             src={landingPageContent.cornerLayerImg}
//             alt="Stroke"
//             width={300}
//             height={300}
//           />
//         </div>
//         <div className="flex w-full items-center ml-5">
//           <div className="flex-1 text-center ml-5 mt-16">
//             <p className="text-black text-sm font-montserrat">
//               {landingPageContent.description}
//             </p>
//           </div>
//           <div className="flex-shrink-0 z-10 -mt-24">
//             <div className="text-white">
//               <Image
//                 src={landingPageContent.stickerImg}
//                 alt="The Pink City"
//                 width={420}
//                 height={180}
//               />
//             </div>
//           </div>
//           <div className="flex-1 text-center mt-9">
//             <h2 className="text-5xl font-poppins">
//               {landingPageContent.title} <span className="font-alexBrush text-8xl text-red-800">{landingPageContent.subtitle}</span>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;



import Image from 'next/image';
import { landingPageContent } from '../Constants/pinkcity/LandingPage'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center lg:h-screen lg:p-6  h-[60vh] p-3 mx-1 lg:mt-0 mt-12 ">
      <div className="relative lg:w-full  lg:p-6 lg:top-12 lg:h-[68vh] h-[100vh]  w-[50vw] ">
        <Image
          src={landingPageContent.backgroundImg}
          alt="Jaipur"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl h-full w-full"
        />
      </div>
      <h2 className='lg:text-9xl text-6xl font-alexBrush relative text-white lg:-mt-52 -mt-28 lg:-ml-[70%] -ml-[40%]'>Jaipur</h2>

      <div className="w-full lg:max-w-screen-xl flex flex-col items-center relative lg:mt-20 lg:-mb-0 -mb-7 mt-12 ">
        <div className="flex justify-left lg:bottom-0 absolute lg:left-0 lg:-ml-20 lg:-mb-7 -ml-56 lg:mt-0 -mt-20 ">
          <Image 
            src={landingPageContent.cornerLayerImg}
            alt="Stroke"
            width={300}
            height={300}
          />
        </div>
        <div className="lg:flex  flex flex-row lg:w-full items-center ml-5  ">
          <div className="flex-1 text-center lg:ml-5 lg:mt-9 -mt-32  ">
            <p className="text-black lg:text-sm text-xs lg:w-[30vw] w-[20vh] lg:p-0   font-montserrat ">
              {landingPageContent.description}
            </p>
          </div>
          <div className="flex-shrink-0 z-10 lg:-mt-24">
            <div className="text-white lg:h-full lg:w-full h-[40vh] w-[40vw] lg:-ml-0 ">
              <Image
                src={landingPageContent.stickerImg}
                alt="The Pink City"
                width={420}
                height={180}
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:mt-9 mt-14 lg:ml-0 -ml-44 ">
            <h2 className="lg:text-5xl font-poppins text-xl">
              {landingPageContent.title} <span className="font-alexBrush lg:text-8xl text-4xl text-red-800">{landingPageContent.subtitle}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;























