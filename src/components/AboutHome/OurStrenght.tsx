import Image from 'next/image';
import { FC } from 'react';
import { strengthsContent } from '../Constants/About/OurStrenght'; // Adjust path as needed
import styles from './featureproject.module.css';

const lineClasses = [
  styles["line-style-0"], // Class for the first line
  styles["line-style-1"], // Class for the second line
  styles["line-style-2"], // Class for the third line
  // Add more classes if needed
];

const OurStrength: FC = () => {
  const { paragraphs, images, icons } = strengthsContent;

  return (
    <div className="relative max-w-screen-xl mx-auto bg-white h-screen">
      <div className="relative">
        <h1 className="text-5xl font-montserrat font-bold text-[#3a2a79] ml-9">Our Strength</h1>
        <div className="flex-1 flex-col p-5 text-center">
          <div className="flex flex-row space-x-5 w-full justify-between relative">
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="p-4 flex flex-col items-center relative top-5">
                {index < paragraphs.length - 1 && (
                  <div className={`absolute top-1 left-[19rem] h-[15rem] border-r-2 border-[#000088] ${lineClasses[index]}`} />
                )}
                <p className={styles[`customParagraphStyle${index}`]}>
                  <span className="text-[#3a2a79] font-bold">{paragraph.title}:</span> {paragraph.content}
                </p>
                <div className={`${styles.iconContainer} ${styles[`icon${index}`]}`}>
                  <Image src={icons[index]} alt={`Icon ${index + 1}`} width={60} height={60} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative justify-center left-0 w-full border-t-2 border-[#000088] -mt-2" />

        <div className="flex flex-wrap mb-3">
          {images.map((image, index) => (
            <div key={index} className="w-full md:w-1/4 p-2 flex justify-center transform transition-transform duration-300 hover:scale-105">
              <Image src={image.src} alt={image.alt} width={300} height={200} className="object-cover rounded-2xl" />
            </div>
          ))}
        </div>

        <div className=" relative p-3 w-full bottom-0 bg-[#1e1542] text-white text-center font-poppins text-4xl font-bold">
          <h1>Read More</h1>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
