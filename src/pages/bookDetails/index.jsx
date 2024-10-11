import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the book ID from the URL
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BASE_URL } from '../../constants';
import { FaRegEye, FaDownload } from "react-icons/fa";
import axios from 'axios';

const BookDetails = () => {
  const { bookId } = useParams(); // Get bookId from the URL
  const [book, setBook] = useState(null); // State to hold book data
  const [error, setError] = useState(false); // State to handle error

  // Fetch book details based on bookId
  const getBookDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/library/${bookId}`);
      setBook(response.data); // Set the book data
    } catch (error) {
      console.error("Error fetching book details", error);
      setError(true); // Set error if fetching fails
    }
  };

  useEffect(() => {
    if (bookId) {
      getBookDetails(); // Fetch book details only if bookId is available
    }
  }, [bookId]);

  if (error) {
    return <div className="text-white text-center mt-32">Error loading book details</div>;
  }

  if (!book) {
    return <div className="text-white text-center mt-32">Loading...</div>;
  }

  return (
    <div className='bg-[#626262]'>
      {/* <div className='bg-[#626262]'> */}
      <Navbar />

      <div className='flex flex-row justify-center gap-6'>
        <div className='h-[75vh] w-[25%] mt-32'>
          <img src={book.img_url} alt={book.title} className='w-full h-full object-cover' />
        </div>
        <div className='h-[100vh] w-[60%] mt-36 mb-2'>
          <h1 className='text-[40px] text-white'>{book.title}</h1>
          <h4 className='text-[20px] text-white mt-6'>Author: {book.author}</h4>
          <h4 className='text-[20px] text-white mt-6'>Year : <span>2011</span></h4>
          <h4 className='text-[20px] text-white mt-6'>Publisher : <span>RoBlack Digital</span> </h4>
          <h4 className='text-[20px] text-white mt-6'>Summary: {book.summary}</h4>
          <div className='flex flex-row gap-6 mt-8'>
            <h4 className='text-white text-[20px]'>Categories</h4>
            <button className="w-[10vw] h-14 px-4 py-2 text-[#E54224] bg-white bg-opacity-80 hover:bg-opacity-100 rounded-md 
                border border-[#E54224] transition-all duration-300 transform hover:scale-105 shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-[#E54224] focus:ring-opacity-50">
              <a href="#" className="flex items-center justify-center font-bold">{book.genre}</a>
            </button>
          </div>
          <div className='mt-6 flex flex-row gap-4'>
            <button className="w-[7vw] px-4 py-2 text-white bg-green-600 bg-opacity-80 hover:bg-opacity-100 rounded-md 
                border border-green-600 transition-colors duration-300 shadow-md 
                focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
              <a href="#" className="flex items-center justify-center font-semibold">Edit</a>
            </button>

            <button className="w-[7vw] px-4 py-2 text-white bg-red-600 bg-opacity-80 hover:bg-opacity-100 rounded-md 
                border border-red-600 transition-colors duration-300 shadow-md 
                focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
              <a href="#" className="flex items-center justify-center font-semibold">Delete</a>
            </button>
          </div>
          <div className='flex items-center space-x-6 text-white mt-4'>
            <p className='flex items-center space-x-2'>
              <FaRegEye />
              <span>{book.views || '1.6k'}</span>
            </p>
            <p className='flex items-center space-x-2'>
              <FaDownload />
              <span>{book.downloads || '500K'}</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
