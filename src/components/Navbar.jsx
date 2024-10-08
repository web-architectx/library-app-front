import React from 'react'
import logo from '../assets/images/logo-light.png'



const Navbar = () => {
  return (
    <div>
      <nav className='flex  flex-row justify-around h-[120px]  bg-slate-600'>
        <div className="library-logo  flex flex-row gap-2 bg-[#E54125] w-[30%] ">
          <img src={logo} className='ml-[20%] ' alt="img" />
          <h1 className='text-[35px] text-white font-bold mr-[15%] mt-8'>E-Library</h1>
        </div>
        <div className="nav-list w-[70%] h-full bg-[#1E1E1E] text-white ">
          <ul className='flex flex-row  justify-stretch gap-12 ml-[25%]  mr-[10%] mt-10 text-[20px]'>
            {/* <ul className='flex flex-row  justify-stretch gap-12 text-[30px]'> */}
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">serach</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#" className='bg-[#E54125] h-[100px] w-[120px]  rounded-[12px]'>Register</a></li>
          </ul>
        </div>
      </nav>

      </div>
  )
}

export default Navbar
