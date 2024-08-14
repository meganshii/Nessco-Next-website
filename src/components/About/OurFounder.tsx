"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { GrAddCircle } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';
import styles from './about.module.css';
import { founders } from '../Constants/About/OurFounders-page'; // Import the dynamic content

interface FounderProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  linkedInUrl: string;
}

interface CardProps {
  handleCloseModal: () => void;
  founderData: FounderProps;
}

const FounderCard: React.FC<FounderProps & { onOpenModal: () => void }> = ({ name, title, imageSrc, linkedInUrl, description, onOpenModal }) => (
  <div className={styles.card}>
    {/* Image container */}
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={name}
        width={300}
        height={400}
      />
    
    </div>

    {/* Content */}
    <div className={styles.content}>
      <h3 className={`${styles.nameTitle} mt-5`}>
        {name}
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon}>
        <Image
            src="/assets/about/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            className="inline-block"
          />

        </a>
      </h3>
      <p className='pb-3'>{title}</p>

      {/* Hidden box for description */}
      <div className={styles.descriptionContainer}>
        <h3 className='font-bold font-montserrat text-lg mt-1'>{name}</h3>
        <p className='font-montserrat mb-3'>{title}</p>
        <p className="text-black font-montserrat leading-5">{description}</p>
      </div>
    </div>
  </div>
);

const Card: React.FC<CardProps> = ({ handleCloseModal, founderData }) => {
  return (
    <div className="p-1 top-6 bg-white h-[88%] w-[95%] rounded-xl shadow-md relative bottom-5 text-black">
      
      {/* Display founder data */}
      <div className="p-4">
        <h3 className='text-xl font-bold'>{founderData.name}</h3>
        <p className='text-lg'>{founderData.title}</p>
        <p>{founderData.description}</p>
      </div>
    </div>
  );
};

const Founders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState<FounderProps | null>(null);

  const openModal = (founder: FounderProps) => {
    setSelectedFounder(founder);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFounder(null);
  };

  return (
    <div className="bg-black text-white py-16 min-h-screen">
      <h2 className="text-center text-5xl font-montserrat mb-8 mt-28">
        Our Founders
      </h2>
      <div className="flex justify-center space-x-8 w-5/6 ml-28">
        {founders.map((founder, index) => (
          <FounderCard
            key={index}
            {...founder}
            onOpenModal={() => openModal(founder)}
          />
        ))}
      </div>

    
    </div>
  );
};

export default Founders;
