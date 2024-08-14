"use client";
import React, { useState } from 'react';
import styles from './subscriber.module.css';
import { TbMailFilled } from "react-icons/tb";

const Subscribe: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
        } else {
            // Handle the subscription logic here
            console.log(`Subscribed with email: ${email}`);
            setError('');
            setEmail(''); // Clear the input field after submission
        }
    };

    return (
        <section className={styles.subscribe}>
            <div className={styles.subsribecontainer}>
                <div className='rounded-full h-14 w-14 bg-white -mt-10 ml-5 '>
                <TbMailFilled size={40} className='ml-2 mt-2 text-[#483d73] '/>
                    
                </div>
                <form className={`${styles.rightsubscribe} flex`} onSubmit={handleSubmit}>
                    <div className='flex -ml-[40rem] h-[3.5rem] w-[43rem] bg-white rounded-full items-center p-2 px-5 font-poppins' >
                    <h2 className={`${styles.subsribeheading} text-2xl text-[#3a2a79]`}>
                        Subscribe & Get updates
                    </h2>

                        <input
                            name='Email'
                            placeholder='Enter your E-mail...'
                            className={`${styles.presenceinpfields} h-[2rem] rounded-full p-5 border border-gray-300 w-[20rem]`}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <button type='submit' className={styles.subscribebtn}>Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
