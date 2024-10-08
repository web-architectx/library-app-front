import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const AddBook = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row bg-slate-900 '>
        <div className='h-[40px] w-[40px] bg-yellow-400'>

        </div>
        <div className='h-[40px] w-[40px] bg-red-400 '>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AddBook
