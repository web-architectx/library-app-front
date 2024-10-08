import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const BookDetails = () => {
  return (
    <div>
        <Navbar/>
        <Navbar />
      <div className='flex flex-row bg-slate-900 justify-center'>
        <div className='h-[100vh] w-[40vw] bg-yellow-400 mt-12 mb-24'>

        </div>
        <div className='h-[100vh] w-[40vw] bg-red-400  mt-12 mb-24'>

        </div>

      </div>
      {/* <p>book details</p> */}
      <Footer />
        <Footer/>
    </div>
  )
}

export default BookDetails
