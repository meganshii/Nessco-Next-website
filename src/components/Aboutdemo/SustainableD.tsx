"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SlArrowRight } from 'react-icons/sl';
import { gsap } from 'gsap/gsap-core';
import styles from '../About/about.module.css';
import bg from '../../../public/assets/about/sustainable.jpeg';
import { sustainableContent } from '../Constants/About/Sustainable-page'; // Import the dynamic content
import style  from './Sustainable.module.css'

const SustainableD = () => {
  const { heading, highlight, description, buttonText } = sustainableContent;

  return (
    <>
      <div className="relative h-full bg-black px-8 py-16">
       
        <div className={`${style.imagecontainer} ` }>
        <div className="absolute   ">
          <Image 
            src={bg} 
            alt="Background Image"
            layout="fit"
            objectFit="cover"
            className='w-[76rem] left-10 h-screen '     />
          {/* <div className="absolute inset-0 bg-black opacity-85"></div> */}
          <div className={`${style.gradientoverlay}`}>
            <div className={`${style.gradientleft}`}></div>
            <div className={`${style.gradientright}`}></div>
          </div>
        </div>
        </div>
       

        <div className="relative  flex flex-col items-center justify-center text-center text-white min-h-screen">
          <h1 className="text-5xl font-montserrat font-bold ">
            {heading} <span className="text-green-500">{highlight}</span>
          </h1>
          <p className="mt-10 text-sm font-montserrat px-4 md:px-32 text-center">
            {description}
          </p>
          <div className={`${styles.container}`}>
            <button className={styles.button}>
              {buttonText}
              <SlArrowRight className={styles.icon} /> 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SustainableD;
