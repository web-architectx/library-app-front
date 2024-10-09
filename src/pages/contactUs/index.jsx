import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../bookList/components/Hero'
import Contact from "../../assets/images/contact.png"
import { FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Hero page="Contact Us" />
      <div className='flex flex-row justify-center mt-10 '>
        <div className='h-[70vh] w-[700px]   '>
          <img src={Contact} alt="img" className='object-cover w-full h-full ' />
        </div>
        <div className='h-[70vh] w-[700px]  '>
        {/* <div className='h-[70vh] w-[700px] bg-yellow-500'> */}
          <h3 className='text-[34px] flex flex-row justify-center mt-4 font-semibold text-[#F3701D]'>Send Us a Message</h3>
          <form className='mt-4 ml-16 flex flex-col'>
            <input type="text" placeholder='Full Name' className='mt-4  h-12 shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' />
            <input type="text" placeholder='Email' className='mt-12 h-12 shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' />
            <textarea type="text" placeholder='Message' className='mt-12  h-20 shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' />

            <button className='mt-4 bg-[#E54324] h-full w-4/5 text-[20px] p-2 flex flex-row gap-2 justify-center text-white' > Send Message <span><FaTelegramPlane size={30} />
</span></button>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ContactUs