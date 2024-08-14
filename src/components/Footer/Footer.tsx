import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Subscribe from '../subscriber/subscriber';
import PolicyHeader from '../Policies/OurPolicies';
import styles from './footer.module.css'; // Make sure this path is correct
import Image from 'next/image';

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
                            <h3 className={`${styles.footerdesctitle} font-bold text-black text-xl`}>Our Stores</h3>
                            <div className=''>
                          
                            <div className='flex flex-col -space-y-5 font-poppins'>
                                <Link href="/" passHref>
                                    <p className={styles.footeratags}>Jaipur</p>
                                </Link>
                                <Link href="/about-us/" passHref>
                                    <p className={styles.footeratags}>Pune</p>
                                </Link>
                                <Link href="/product/" passHref>
                                    <p className={styles.footeratags}>Dubai</p>
                                </Link>
                                <Link href="/video/" passHref>
                                    <p className={styles.footeratags}>Germany</p>
                                </Link>
                                <Link href="/contact/" passHref>
                                    <p className={styles.footeratags}>Tokyo</p>
                                </Link>
                               
                            </div>
                            <h3 className={`${styles.footerdesctitle} font-bold text-black text-xl mt-5`}>Bussiness Partners</h3>
                            <p className='mt-3 text-[1.1rem] font-poppins'>Our Bussiness partners</p>
                        </div>

                        <h3 className={`${styles.footerdesctitle} font-bold text-black text-xl mt-10`}>Awards & Certifications</h3>
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
                        <div className='flex flex-col -ml-[8rem]'>
                            <h3 className="font-bold text-xl text-black">Clientele</h3>
                            <div className={styles.footerlistslink}>
                                <Link href="/" passHref>
                                    <p className='font-poppins text-[1.1rem] mt-4'>Our Clients</p>
                                </Link>
                               
                            </div>
                        </div>

                        <div className='flex flex-col mx-10 '>
                            <h3 className='font-bold text-xl text-black'>Careers</h3>
                            <div className='text-[1rem] font-poppins -space-y-7'>
                                <Link href="/product/high-speed-paper-cup-making-machine/" passHref>
                                    <p className={styles.footeratags}>Fulltime</p>
                                </Link>
                                <Link href="/product/paper-bag-making-machine/" passHref>
                                    <p className={styles.footeratags}>Freelance</p>
                                </Link>
                             
                            </div>
                        </div>
                        <div className={styles.footerlist}>
                            <h3 className="font-bold text-xl text-black">Links</h3>
                            <div className='font-poppins text-[1.1rem] space-y-10'>
                                <Link href="/" passHref>
                                    <p className={styles.footeratags}>About Us</p>
                                </Link>
                                <Link href="/about-us/" passHref>
                                    <p className={styles.footeratags}>Products</p>
                                </Link>
                                <Link href="/product/" passHref>
                                    <p className={styles.footeratags}>Application</p>
                                </Link>
                                <Link href="/video/" passHref>
                                    <p className={styles.footeratags}>Solutions</p>
                                </Link>
                                <Link href="/contact/" passHref>
                                    <p className={styles.footeratags}>Support</p>
                                </Link>
                                <Link href="/market-area/" passHref>
                                    <p className={styles.footeratags}>Resources</p>
                                </Link>
                                <Link href="/market-area/" passHref>
                                    <p className={styles.footeratags}>Videos</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <h3 className='font-bold text-xl text-black'>Services</h3>
                            <div className='font-poppins text-[1rem] w-[15rem]  '>
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
                                <Link href="/product/high-speed-paper-cup-making-machine/" passHref>
                                    <p className={styles.footeratags}>Paper Straw Machine</p>
                                </Link>
                                <Link href="/product/paper-bag-making-machine/" passHref>
                                    <p className={styles.footeratags}>Fexo Printing Machine</p>
                                </Link>
                                <Link href="/product/paper-container-bowl-making-machine/" passHref>
                                    <p className={styles.footeratags}>Die Cutting Machine</p>
                                </Link>
                            
                             
                            </div>
                        </div>

                        <div className={styles.footerlistabout}>
                            <h3 className={`${styles.footerdesctitle} font-bold text-black text-xl`}>Address</h3>
                            <div className=''>
                          
                            <div className='font-poppins '>
                               <p className='mt-4 w-[14rem]'>
                               E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA
                               </p>
                            </div>
                        </div>

                        <h3 className={`${styles.footerdesctitle} font-bold text-black text-xl mt-[1.6rem] `}>Contacts</h3>

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
                               
                             
                            </div>

                            <div className='flex flex-row space-x-2 mt-10'>

      <p aria-label="Footer Icon" className=''>
        <Image
          src="/assets/footer/facebook.png" // Replace with the correct path to your image
          alt="Facebook"
          width={70}  // Adjust the size as needed
          height={70} // Adjust the size as needed
        />
      </p>
      <p aria-label="Footer Icon" className=''>
        <Image
          src="/assets/footer/twitter.png" // Replace with the correct path to your image
          alt="Twitter"
          width={70} 
          height={70} 
        />
      </p>
      <p aria-label="Footer Icon" className='mt-1'>
        <Image
          src="/assets/footer/youtube.png" // Replace with the correct path to your image
          alt="YouTube"
          width={90} 
          height={90} 
        />
      </p>
      <p aria-label="Footer Icon" className=''>
        <Image
          src="/assets/footer/instagram.png" // Replace with the correct path to your image
          alt="LinkedIn"
          width={70} 
          height={70} 
        />
      </p>
      <p aria-label="Footer Icon" className=''>
        <Image
          src="/assets/footer/linkedin.png" // Replace with the correct path to your image
          alt="Instagram"
          width={70} 
          height={70} 
        />
      </p>
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
