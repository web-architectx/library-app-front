import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold search input
  const [filteredResults, setFilteredResults] = useState([]); // State to hold search results
  const [libraries, setLibraries] = useState([]); // State to hold library data
  const [reviews, setReviews] = useState([]); // State to hold review data
  const [authors, setAuthors] = useState([]); // State to hold author data

  // Fetch all necessary data from APIs on component mount
  const fetchData = async () => {
    try {
      const libraryRes = await axios.get('https://library-app-mk1q.onrender.com/library');
      const reviewRes = await axios.get('https://library-app-mk1q.onrender.com/review');
      const authorRes = await axios.get('https://library-app-mk1q.onrender.com/author');
      
      setLibraries(libraryRes.data);
      setReviews(reviewRes.data);
      setAuthors(authorRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredResults([]); // If no search term, clear results
    } else {
      const results = libraries.filter((library) => {
        // Check if title or author matches the search term
        const reviewMatch = reviews.some((review) => review.book === library.title);
        const authorMatch = authors.some((author) => author.name === library.author);

        return (
          (library.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          library.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
          reviewMatch && authorMatch
        );
      });

      setFilteredResults(results);
    }
  }, [searchTerm, libraries, reviews, authors]);

  return (
    <div>
      <div className="hero">
        <div className="overlay  ml-[30%] ">
          <h1 className='text-white mt-[10%] text-[50px] font-extrabold absolute justify-center items-center '>E-library Management App</h1>
        </div>
      </div>

      <div className="search-and-icons bg-[#1E1E1E] flex flex-row h-[120px] w-[100%] ">
        <input
          type="text"
          placeholder="Search Book"
          className="search-author w-[80%] text-[40px] h-[100px]  mt-2 mb-2 ml-8 p-8 text-white"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="icons text-white w-[20%] h-[100px] flex flex-row  items-stretch gap-8 mt-14 ml-[100px]">
          <a href="#"><FaFacebookF size={40} color='#E54125' /></a>
          <a href="#"><FaInstagram size={40} color='#E54125' /></a>
          <a href="#"><FaTwitter size={40} color='#E54125' /></a>
        </div>
      </div>

      {/* Display search results */}
      <div className="search-results bg-[#f8f8f8] p-8">
  {filteredResults.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredResults.map((library) => (
        <div
          key={library._id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Book Image */}
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${library.img_url})` }}>
          {/* <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${library.img_url || 'https://via.placeholder.com/150'})` }}> */}
          </div>
          
          {/* Book Details */}
          <div className="p-6">
            <h3 className="text-[24px] font-bold mb-2 text-gray-800">{library.title}</h3>
            <p className="text-[18px] text-gray-600 mb-1">Author: {library.author}</p>
            <p className="text-[16px] text-gray-600 mb-1">Genre: {library.genre}</p>
            <p className="text-[14px] text-gray-500 mb-4">Summary: {library.summary.length > 100 ? `${library.summary.substring(0, 100)}...` : library.summary}</p>
            
            {/* Optional buttons or more details */}
            <div className="mt-4 flex justify-between">
              {/* <button className="text-white bg-[#E54224] px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
                View Details
              </button> */}
              <Link to={`/book/${library._id}`}>
                <button className="text-white bg-[#E54224] px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
                  View Details
                </button>
                </Link>
              <button className="text-[#E54224] border border-[#E54224] px-4 py-2 rounded-lg hover:bg-[#E54224] hover:text-white transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-700 text-center mt-4 text-[34px] font-bold">No results found</p>
  )}
</div>

    </div>
  );
};

export default Hero;
