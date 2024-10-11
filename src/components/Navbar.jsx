import React from 'react'
import logo from '../assets/images/logo-light.png'
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { HiBookOpen } from "react-icons/hi2";
import { HiPlusSmall } from "react-icons/hi2";



const Navbar = () => {
  return (
    <div>
      {/* <nav className="flex flex-col sm:flex-row justify-around h-auto sm: sm:h-[24px] sm:w-full   bg-slate-600"> */}
      <nav className='flex  flex-row justify-around h-[120px]  bg-slate-600'>
        <div className="library-logo  flex flex-row gap-2 bg-[#E54125] w-[30%] ">
          <img src={logo} className='ml-[20%] ' alt="img" />
          <h1 className='text-[30px] text-white font-bold mr-[15%] mt-8'>E-Library</h1>
        </div>
        <div className="nav-list w-[70%] h-full bg-[#1E1E1E] text-white ">
          <ul className='flex flex-row  justify-stretch gap-12 ml-[25%]  mr-[10%] mt-10 text-[20px]'>
            {/* <ul className='flex flex-row  justify-stretch gap-12 text-[30px]'> */}
            {/* <li><a href="#">Home</a></li> */}
            <li><Link to="/">Home</Link></li>
            
            {/* <li><Link to="/categories">Categories</Link></li> */}
            <li><Link to="/booklist">Library
</Link></li>
 
            <li className=''><Link to="/add-new" className='flex flex-row'><HiPlusSmall size={30} />
            <HiBookOpen size={40}/></Link></li>
            <li><Link to="/contact-us">Contact</Link></li>

            {/* <li><a href="#">search</a></li> */}
            <li>
              <a href="#">
                <FaSearch className="text-[32px] text-[#E54125]" />
              </a>
            </li>
            {/* <li><a href="#">Login</a></li> */}
            <li>
              <a
                href="#"
                className='bg-[#E54125] h-[40px] w-[120px] text-white text-center flex items-center justify-center rounded-[12px] hover:bg-[#FF6F61] transition-all duration-300 ease-in-out shadow-lg'
              >
                Register
              </a>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
