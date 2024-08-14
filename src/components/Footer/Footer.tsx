import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Subscribe from '../subscriber/subscriber';
import PolicyHeader from '../Policies/OurPolicies';
import styles from './footer.module.css'; // Make sure this path is correct

const Footer: React.FC = () => {
    return (
        <>
            <Subscribe />
            <PolicyHeader/>
            <footer className={styles.footer}>
                <div className={styles.bgimagefooter}></div>
                <div className={styles.footercontainer}>
                    
                   
                    <div className={styles.footercontent}>
                        <div className={styles.footerlistabout}>
                            <h3 className={`${styles.footerdesctitle} font-bold text-black text-2xl`}>Our Stores</h3>
                            <div className=''>
                          
                            <div className={styles.footerlistslink}>
                                <Link href="/" passHref>
                                    <p className={styles.footeratags}>Home</p>
                                </Link>
                                <Link href="/about-us/" passHref>
                                    <p className={styles.footeratags}>About us</p>
                                </Link>
                                <Link href="/product/" passHref>
                                    <p className={styles.footeratags}>Machines</p>
                                </Link>
                                <Link href="/video/" passHref>
                                    <p className={styles.footeratags}>Video</p>
                                </Link>
                                <Link href="/contact/" passHref>
                                    <p className={styles.footeratags}>Contact</p>
                                </Link>
                                <Link href="/market-area/" passHref>
                                    <p className={styles.footeratags}>Market Area</p>
                                </Link>
                            </div>
                        </div>
                            <div className={styles.footersocialicons}>
                                <p aria-label="Footer Icon"   className={styles.footersocialicon}>
                                    <FaFacebookF />
                                </p>
                                <p aria-label="Footer Icon" className={styles.footersocialicon}>
                                    <FaTwitter />
                                </p>
                                <p aria-label="Footer Icon"  className={styles.footersocialicon}>
                                    <FaYoutube />
                                </p>
                                <p aria-label="Footer Icon"  className={styles.footersocialicon}>
                                    <FaLinkedin />
                                </p>
                                <p aria-label="Footer Icon"  className={styles.footersocialicon}>
                                    <FaInstagram />
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='font-4xl text-black font-bold'>Clientele</h3>
                            <div className={styles.footerlistslink}>
                                <Link href="/" passHref>
                                    <p className={styles.footeratags}>Home</p>
                                </Link>
                                <Link href="/about-us/" passHref>
                                    <p className={styles.footeratags}>About us</p>
                                </Link>
                                <Link href="/product/" passHref>
                                    <p className={styles.footeratags}>Machines</p>
                                </Link>
                                <Link href="/video/" passHref>
                                    <p className={styles.footeratags}>Video</p>
                                </Link>
                                <Link href="/contact/" passHref>
                                    <p className={styles.footeratags}>Contact</p>
                                </Link>
                                <Link href="/market-area/" passHref>
                                    <p className={styles.footeratags}>Market Area</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.footerlist}>
                            <h3 className='font-bold text-2xl text-black'>Careers</h3>
                            <div className={styles.footerlistslink}>
                                <Link href="/product/high-speed-paper-cup-making-machine/" passHref>
                                    <p className={styles.footeratags}>Paper Cup Machine</p>
                                </Link>
                                <Link href="/product/paper-bag-making-machine/" passHref>
                                    <p className={styles.footeratags}>Paper Bag Machine</p>
                                </Link>
                                <Link href="/product/paper-container-bowl-making-machine/" passHref>
                                    <p className={styles.footeratags}>Paper Bowl Machine</p>
                                </Link>
                                <Link href="/product/pe-coating-machine/" passHref>
                                    <p className={styles.footeratags}>PE Coating Machine</p>
                                </Link>
                             
                            </div>
                        </div>
                        <div className={styles.footerlist}>
                            <h3 className="font-bold text-2xl text-black">Links</h3>
                            <div className={styles.footerlistslink}>
                                <p className={styles.footeraddress}>
                                    E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA
                                </p>
                                <Link href='tel:+91 99822 00038' className={styles.mobilenumber}>+91 99822 00038</Link>
                                <Link href='tel:+91 95494 44484' className={styles.mobilenumber}>+91 95494 44484</Link>
                                <Link href='mailto:info@nesscoindia.com' className={styles.email}>info@nesscoindia.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={styles.footerrights}>
                <div className={styles.footercontainerx}>
                    <p className={styles.footerright}>Nessco &copy; 2024 All Right Reserved</p>
                    <Link href="/privacy-policy/" passHref>
                        <p className={styles.footerright}>Privacy Policy</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
