import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../bookList/components/Hero'
import OrangeLogo from '../../assets/images/logo-orange.png'
// import { FaFaceAngry } from 'react-icons/fa6'
import { FaTag } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";



import { useSpring, animated } from '@react-spring/web'

const Number = ({ n }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const AboutUs = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <Hero page="About Us" />
            <div className='flex flex-col justify-center items-center mt-12 gap-12'>
                <div className='h-[50vh] w-[80vw]   flex flex-col justify-center items-center gap-4'>
                    <img src={OrangeLogo} alt="img" className='text-[20px] w-[100px]' />
                    <h1 className='text-[36px] text-[#F0641F] font-bold'>E-Library</h1>
                    <h3 className='text-[24px] font-semibold '>An Online Library Management System
                    </h3>
                    <p className='text-[#595C5F] text-[20px]  text-justify'>Our Online Library Management System efficiently oversees the details of library resources, including books and their authors, as well as the members borrowing these books. Our system is meticulously designed to be computerized, streamlining and automating various operations such as member information management, book issuance and returns. This transition to a computerized library not only enhances the efficiency of maintenance tasks but also significantly diminishes the manual workload, contributing to a more streamlined and effective library management experience.</p>
                </div>
                <div className='h-[20vh] w-[80vw]   flex flex-row justify-center mt-4 gap-16 mb-16'>
                    {/* Inserted the logo (React icon) here */}
                    {/* <div className='h-[20vh] w-[24vw]   flex items-center justify-center'> */}
                    {/* <FaFaceAngry className='text-[#EB5422] text-[100px]' /> */}
                    <div className='h-[25vh] w-[24vw] bg-[#EF6020] flex flex-col items-center justify-center'>
                    <div className='flex flex-col justify-center items-center mt-6'>
                            <div className='flex flex-row justify-center gap-2'>
                            <p className='text-white ml-4 text-[49px] font-semibold flex flex-row '>Categories  </p>
                            <span><FaTag size={40} className='text-white mt-6' />
                            </span>
                            </div>
                            <p className='text-[40px] font-bold text-white flex flex-row'><Number n={80} /></p>
                        </div>
                    </div> 
                    {/* <FaUser />
 */}
                    <div className='h-[25vh] w-[24vw] bg-[#EF6020]'>
                        <div className='flex flex-col justify-center items-center mt-6'>
                            <div className='flex flex-row justify-center gap-2'>
                            <p className='text-white ml-4 text-[49px] font-semibold flex flex-row '>Books  </p>
                            <span><FaBook size={40} className='text-white mt-6' />
                            </span>
                            </div>
                            <p className='text-[40px] font-bold text-white flex flex-row'><Number n={10000} /></p>
                        </div>
                    </div>
                    <div className='h-[25vh] w-[24vw] bg-[#EF6020]'>
                    <div className='flex flex-col justify-center items-center mt-6'>
                            <div className='flex flex-row justify-center gap-2'>
                            <p className='text-white ml-4 text-[49px] font-semibold flex flex-row '>Users  </p>
                            <span><FaUser size={35} className='text-white mt-6' />
                            </span>
                            </div>
                            <p className='text-[40px] font-bold text-white flex flex-row'><Number n={1200} /></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    )
}

export default AboutUs