import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import { BASE_URL } from '../../constants'


const AddBook = () => {
 
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
    // console.log("form data")
    //collect the form data
    const formData = new FormData(event.target);
    //post data to api
    const response = await axios.post(`${BASE_URL}/books`,{
      title: formData.get('title'),
      author: formData.get('author'),
      genre: formData.get('genre'),
      summary: formData.get('summary'),
      title: formData.get('title'),})
    } catch (error) {
      console.log(error)
    }

    }
  
 
  return (
    <div className='bg-slate-900'>
      <Navbar />
      <div className='flex flex-row  justify-center '>
        {/* <div className="w-full max-w-xs"> */}
        <form onSubmit={handleSubmit()} className="bg-white shadow-md rounded-lg px-12 pt-8 pb-10 mb-24 mt-20 w-2/5 mx-auto">
          <h1 className='text-black text-[34px] font-semibold mb-4 ml-32'>Add Book</h1>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224]"
              id="title"
              name='title'
              type="text"
              placeholder="Title"
            />
          </div>

          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224]"
              id="author"
              name='author'
              type="text"
              placeholder="Author"
            />
          </div>

          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224]"
              id="genre"
              name='genre'
              type="text"
              placeholder="Genre"
            />
          </div>

          <div className="mb-6">
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224] h-24 resize-none"
              id="summary"
              name='summary'
              placeholder="Summary"
            />
          </div>

          <div className="mb-6">
            <select className="block appearance-none w-full bg-white border  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-[#E54224] focus:ring-0" name='available'>
              <option>Available</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>


          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="file-upload">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E54224]"
              id="file-upload"
              type="file"
              name='image'
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <button type="submit"
              className="bg-[#E54224] hover:bg-[#FF7F7F] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:bg-[#FF7F7F]"
               
            >
              Add Book
            </button>
          </div>
        </form>




        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default AddBook
