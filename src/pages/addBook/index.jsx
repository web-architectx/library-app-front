import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
// import { BASE_URL } from '../../constants';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
import Swal from 'sweetalert2'; // Import SweetAlert
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddBook = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const getAuthors = async () => {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/author`);
      // const response = await axios.get(`${BASE_URL}/author`);
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post(`${BASE_URL}/library`, {
        title: formData.get('title'),
        author: formData.get('author'),
        genre: formData.get('genre'),
        summary: formData.get('summary'),
        // available: formData.get('available') === 'true', // Convert to boolean
        img_url: formData.get('img_url'),
      });
      console.log("Book added:", response.data);

      // Show success message with SweetAlert
      Swal.fire('Success!', 'The book has been added.', 'success').then(() => {
        navigate('/booklist'); // Redirect to /booklist after alert is confirmed
      });

      // Optionally reset the form or redirect
      event.target.reset(); // Reset the form
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data); // Log actual error message
        Swal.fire('Failed', 'Error adding book: ' + error.response.data.message, 'error'); // Show error alert
      } else {
        console.error("Error adding book:", error.message);
        Swal.fire('Failed', 'Error adding book: ' + error.message, 'error'); // Show error alert
      }
    }
  };

  return (
    <div className='bg-slate-900'>
      <Navbar />
      <div className='flex flex-row justify-center'>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-12 pt-8 pb-10 mb-24 mt-20 w-2/5 mx-auto">
          <h1 className='text-black text-[34px] font-semibold mb-4 flex flex-row justify-center'>Add Book</h1>
          
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224]"
              id="title"
              name='title'
              type="text"
              placeholder="Title"
              required
            />
          </div>

          <div className="mb-6">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-[#E54224] focus:ring-0" name='author' required>
              <option value="">Select Author</option>
              {authors.map(author => (
                <option key={author._id} value={author.name}>{author.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224]"
              id="genre"
              name='genre'
              type="text"
              placeholder="Genre"
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224] h-24 resize-none"
              id="summary"
              name='summary'
              placeholder="Summary"
              required
            />
          </div>

          {/* <div className="mb-6">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-[#E54224] focus:ring-0" name='available' required>
              <option value="">Select Availability</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div> */}

          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E54224]"
              id="img_url"
              name='img_url'
              type="text"
              placeholder="Image URL"
              required
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <button type="submit" className="bg-[#E54224] hover:bg-[#FF7F7F] text-white font-bold py-3 px-6 rounded-lg focus:outline-none">
              Add Book
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddBook;
