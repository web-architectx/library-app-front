import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Aragon from '../../assets/images/books/aragon.jpg'
import { FaRegEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const BookDetails = () => {
  return (
    <div className='bg-[#626262]'>
      <Navbar />

      <div className='flex flex-row   justify-center gap-6 '>
        {/* <div className='flex flex-row  bg-red-400 justify-center'> */}
        <div className='h-[75vh] w-[25%]  mt-32'>
          <img src={Aragon} alt="img" className='w-full h-full object-cover' />
        </div>
        <div className='h-[100vh] w-[60%]   mt-32 mb-24'>
          <h1 className='text-[40px] text-white'>Steve Jobs</h1>
          <h4 className='text-[20px] text-white mt-6'>Year <span>:</span>2011</h4>
          <h4 className='text-[20px] text-white mt-6'>Publisher <span>:</span>Hachette Digital</h4>
          <h4 className='text-[20px] text-white mt-6'>Summary <span>:</span>Based on more than forty interviews with Steve Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - this is the acclaimed, internationally bestselling biography of the ultimate icon of inventiveness. Walter Isaacson tells the story of the rollercoaster life and searingly intense personality of creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.</h4>
          <div className='flex flex-row gap-6 mt-8'>
            <h4 className='text-white text-[20px]'>Categories</h4>
            <button className=" w-[7vw] px-4 py-2 text-white bg-[#E54224] bg-opacity-70 hover:bg-opacity-90 rounded-md border border-[#E54224] transition-colors duration-300">
              <a href="#">Fiction</a>
            </button>
          </div>
          <div className='mt-6 flex flex-row gap-4'>
            <button className=" w-[7vw] px-4 py-2 text-white bg-[#E54224] bg-opacity-70 hover:bg-opacity-90 rounded-md border border-[#E54224] transition-colors duration-300">
              <a href="#">Edit</a>
            </button>
            <button className=" w-[7vw] px-4 py-2 text-white bg-[#E54224] bg-opacity-70 hover:bg-opacity-90 rounded-md border border-[#E54224] transition-colors duration-300">
              <a href="#">Delete</a>
            </button>
          </div>
          {/* <div className=''> */}
          <div className='flex items-center space-x-6 text-white mt-2'>
            <p className='flex items-center space-x-2'>
              <FaRegEye />
              <span >1.6k</span>
            </p>
            <p className='flex items-center space-x-2'>
              <FaDownload />
              <span>500K</span>
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BookDetails
