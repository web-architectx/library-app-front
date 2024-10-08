import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/images/logo-light.png'
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex flex-row gap-16  bg-[#E9E9E9] mt-12 h-auto w-auto p-14'>
      <div className="logo-div h-auto w-[40%]   flex flex-col">
        <div className='flex flex-row'>
          <img src={logo} className='w-[140px] gap-4 text-[#E64524] ' alt="logo" />
          <h1 className='text-[70px] font-bold mt-4 text-[#E64524]'>E-Library</h1>
        </div>
       <div className='flex flex-col gap-1 text-[20px] font-semibold ml-4'>
       <p>123 Buro</p>
        <p>Osu,Ghana</p>
        <p>(974) 1234 56789</p>
       </div>
        <div className='flex flex-row mt-8 ml-4  mb-4 gap-2 text-[#E64524]'>
          <a href="#"><FaFacebookF size={40} /></a>
          <a href="#"><FaInstagram size={40}/></a>
          <a href="#"><FaTwitter size={40}/></a>
        </div>
      </div>
      <div className="explore h-auto w-[20%]   flex flex-col gap-4 text-[20px]">
        <a href="#" className='font-bold'>Explore</a>
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Books</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
         
      </div>
      <div className="your-account h-auto w-[20%]   flex flex-col text-[20px] gap-4">
        <a href="#" className='font-bold'>Your Account</a>
        <a href="#">Register</a>
        
      </div>
      <div className="legal h-auto w-[20%]   flex flex-col gap-4 text-[20px]">
        <a href="#" className='font-bold '>Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>

    </div>
  )
}

export default Footer
