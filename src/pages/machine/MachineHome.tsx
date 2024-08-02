import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Machine = () => {
  return (
    <div className="min-h-screen bg-white  flex flex-col">
      <Head>
        <title>Food Packaging Machines</title>
        <meta name="description" content="Food Packaging Machines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center px-4 py-2 border-b">
        <nav>
          <ul className="flex space-x-4">
            {['Machines', 'About Us', 'News', 'Brands', 'Clientele', 'Testimonials'].map((item) => (
              <li key={item} className="text-gray-600 hover:text-gray-900 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold text-gray-800">
          Food Packaging Machines
        </h1>
        <h2 className="text-5xl font-bold text-red-500 mt-2">
          Flexo Printing
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Flexo Printing Machine, with 200 mtr per sec.<br />
          4 Color Machines, designed for paper rolls.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Book Now
        </button>
        <div className="mt-8 relative w-full h-96">
          <Image src="/path/to/your/machine-image.png" fill  alt="Machine Image" />
        </div>
        <div className="mt-8">
        </div>
      </main>
      <footer className="flex flex-col items-center py-4 border-t">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Food Packaging Machines. All rights reserved.
        </p>
      </footer>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4">
        {['phone', 'whatsapp', 'email', 'chat'].map((icon) => (
          <button key={icon} className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <Image src={`/icons/${icon}.svg`} width={24} height={24} alt={icon} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Machine;
