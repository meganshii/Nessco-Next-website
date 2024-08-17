"use client";

import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import styles from './contact.module.css'
import Image from 'next/image';

interface FormData {
  SingleLine: string;
  Email: string;
  PhoneNumber_countrycode: string;
  SingleLine1: string;
  MultiLine: string;
}

interface Errors {
  phoneNumber: string;
  email: string;
}

const ContactForm: React.FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    SingleLine: '',
    Email: '',
    PhoneNumber_countrycode: '',
    SingleLine1: '',
    MultiLine: '',
  });

  const [errors, setErrors] = useState<Errors>({ phoneNumber: '', email: '' });

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\d{7,15}$/;
    return phoneRegex.test(number);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    if (!formData.PhoneNumber_countrycode) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Phone number is required',
      }));
      valid = false;
    } else if (!validatePhoneNumber(formData.PhoneNumber_countrycode)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Phone number must be between 7 and 15 digits long',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
    }

    if (!formData.Email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      valid = false;
    } else if (!validateEmail(formData.Email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is not valid',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

  }

  return (
    <section className={`${styles.contact} left-9 mt-28 bottom-10 rounded-[2rem]`}>
            <div className={`${styles.contactshape}`}></div>
            <div className="container mx-auto p-6 ">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <p className="  text-3xl font-poppins font-bold  text-black mt-3">Get In Touch</p>
                        <h1 className="text-3xl text-black font-poppins mt-5 ">Have a Project in Mind? <br />Let’s Contact</h1>
                        <div className="mt-8">
                            <div className="flex items-start mb-5 ">
                                <Image src='/assets/contact/location.png' alt="Marker" width={80} height={80} className="w-10 h-10 mr-4 mt-10" />
                                <div className='ml-2'>
                                    <h2 className="text-xl font-bold font-poppins text-[#3a2a79] mb-1 ">Head Office</h2>
                                    <a href="https://maps.app.goo.gl/kuArACWXXSUuSY848" className="text-black ">E-186, Apparel Park, RIICO Industrial Area, <br/> Mahal Road, Jagatpura, Jaipur (Rajasthan) - <br/>302022, INDIA</a>
                                </div>
                            </div>
                            <hr className="border-gray-400 border-[0.10rem] -ml-6 " />
                            <div className="flex items-start mb-6">
                                <Image src='/assets/contact/email.png' alt="Email" width={80} height={80} className="w-10 h-10 mr-4 mt-5" />
                                <div className=''>
                                    <h2 className="text-xl font-bold font-poppins text-[#3a2a79] mt-5 mb-1 ml-2">Company Email</h2>
                                    <a href="mailto:info@nesscoindia.com" className="text-black ml-2">Info@nesscoindia.com</a>
                                </div>
                            </div>
                            <hr className="border-gray-400 border-[0.10rem] -ml-6" />
                            <div className="flex items-start">
                                <Image src='/assets/contact/call.png' alt="Phone"  width={80} height={80} className="w-10 h-10 mr-4 mt-10" />
                                <div  className='ml-2'>
                                    <h2 className="text-xl font-bold font-poppins text-[#3a2a79] mt-3 mb-1">Contact Us</h2>
                                    <a href="tel:+91 95494 44484" className="text-black">+91 95494 44484</a>  <br/>
                                    <a href="tel:+91 99822 00038" className="text-black">+91 99822 00038</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <form onSubmit={handleSubmit} className="bg-white  p-8">
                
                        <div className="grid grid-cols-1 gap-4 ">
   {/* first row */}
    <div className="grid grid-cols-2 gap-4 ">
        <input
            type="text"
            placeholder="Full Name"
            className="p-2 border-none rounded-xl h-[5rem] bg-[#f5f5f5] placeholder-black"
        />
        <input
            type="text"
            placeholder="Email"
            className="p-2 border-none rounded-xl bg-[#f5f5f5]  placeholder-black"
        />
    </div>
    
   {/* second row */}
    <div className="grid grid-cols-2 gap-4">
        <input
            type="text"
            placeholder="Phone Number"
            className="p-2 border-none  rounded-xl h-[5rem] bg-[#f5f5f5]  placeholder-black"
        />
        <input
            type="text"
            placeholder="Subject"
            className="p-2 border-none rounded-xl bg-[#f5f5f5]  placeholder-black"
        />
    </div>
    
 {/* third row */}
    <input
        type="text"
        placeholder="Message"
        className="p-2 borer-none rounded-xl w-full h-[10rem] bg-[#f5f5f5]  placeholder-black "
    />
</div>
                            <button
                                aria-label="Send Message"
                                type="submit"
                                className="mt-6 flex items-center bg-blue-500 text-white py-3 px-5 rounded-md hover:bg-blue-600 transition"
                            >
                                <p>Send Message</p>
                                <FaArrowRightLong className="ml-2" style={{ fontSize: '1.5rem' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default ContactForm;
