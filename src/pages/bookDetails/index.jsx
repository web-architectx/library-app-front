import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BASE_URL } from '../../constants';
import { FaRegEye, FaDownload } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';  


const BookDetails = () => {
  const { bookId } = useParams(); // Get bookId from the URL
  const [book, setBook] = useState(null); // State to hold book data
  const [error, setError] = useState(false); // State to handle error
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [formData, setFormData] = useState({}); // State to hold form data
  const navigate = useNavigate(); // Use navigate for redirection after deletion

  // Fetch book details based on bookId
  const getBookDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/library/${bookId}`);
      // Debugging output
      // console.log("Fetched book data:", response.data); 
      setBook(response.data); // Set the book data
      setFormData({
        title: response.data.title,
        author: response.data.author,
        genre: response.data.genre,
        summary: response.data.summary,
        img_url: response.data.img_url,
      }); // Initialize form data with book data
    } catch (error) {
      console.error("Error fetching book details", error);
// Set error if fetching fails
      setError(true); 
    }
  };

  // Function to handle book deletion with SweetAlert confirmation
  const deleteBook = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete the book "${book.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E54224',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/library/${bookId}`); // DELETE request
          Swal.fire('Deleted!', 'This book has been deleted.', 'success'); // Show success alert
          navigate('/booklist'); // Redirect to the book list page after deletion
        } catch (error) {
          // console.error("Error deleting book:", error);
          Swal.fire('Failed', 'Failed to delete the book.', 'error'); // Show error alert
        }
      }
    });
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle the edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
// Debugging output
    // console.log("Form data being submitted:", formData); 
    try {
      // PATCH request to update the book
      const response = await axios.patch(`${BASE_URL}/library/${bookId}`, formData);
      // Debugging output
      // console.log("Response from update API:", response); 

      if (response.status === 200) { // Ensure the response is successful
        // Show success message
        Swal.fire('Updated!', 'The book has been updated.', 'success');

        // Close the modal after successful update
        setModalOpen(false);

        // Refresh book details to show updated data
        getBookDetails();
      } else {
        // Handle non-successful responses
        Swal.fire('Failed', 'Failed to update the book.', 'error');
      }
    } catch (error) {
      console.error("Error updating book:", error);
      // Show error message
      Swal.fire('Failed', 'Failed to update the book. Please try again.', 'error');
    }
  };

  useEffect(() => {
    if (bookId) {
      getBookDetails();
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
      <Navbar />

      <div className='flex flex-row justify-center gap-6'>
        <div className='h-[75vh] w-[25%] mt-32'>
          <img src={book.img_url} alt={book.title} className='w-full h-full object-cover' />
        </div>
        <div className='h-[100vh] w-[60%] mt-36 mb-2'>
          <h1 className='text-[40px] text-white'>{book.title}</h1>
          <h4 className='text-[20px] text-white mt-6'>Author: {book.author}</h4>
          <h4 className='text-[20px] text-white mt-6'>Year: <span>2011</span></h4>
          <h4 className='text-[20px] text-white mt-6'>Publisher: <span>RoBlack Digital</span></h4>
          <h4 className='text-[20px] text-white mt-6'>Summary: {book.summary}</h4>
          <div className='flex flex-row gap-6 mt-8'>
            <h4 className='text-white text-[25px] mt-3'>Genre</h4>
            <button className="w-[10vw] h-14 px-4 py-2 text-[#E54224] bg-white bg-opacity-80 hover:bg-opacity-100 rounded-lg 
                border border-[#E54224] transition-all duration-300 transform hover:scale-105 shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-[#E54224] focus:ring-opacity-50 border-none">
              <a href="#" className="flex items-center justify-center font-bold text-[24px]">{book.genre}</a>
            </button>
          </div>
          <div className='mt-6 flex flex-row gap-4'>
            <button
              onClick={() => setModalOpen(true)} // Open modal
              className="w-[7vw] px-4 py-2 text-white bg-green-600 bg-opacity-80 hover:bg-opacity-100 rounded-md 
                border border-green-600 transition-colors duration-300 shadow-md 
                focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
              <span className="flex items-center justify-center font-semibold">Edit</span>
            </button>

            {/* Delete button with SweetAlert confirmation */}
            <button
              onClick={deleteBook} // Add delete functionality
              className="w-[7vw] px-4 py-2 text-white bg-red-600 bg-opacity-80 hover:bg-opacity-100 rounded-md 
                border border-red-600 transition-colors duration-300 shadow-md 
                focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
              <span className="flex items-center justify-center font-semibold">Delete</span>
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

      {/* Modal for editing book details */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Book</h2>
            <form onSubmit={handleEditSubmit} key={formData._id}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title || ''}  // Ensure default value
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author || ''}  // Ensure default value
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="genre">Genre</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={formData.genre || ''}  // Ensure default value
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="summary">Summary</label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary || ''}  // Ensure default value
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)} // Close modal
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BookDetails;


/** Love Triangle
 * Romeo Asante
 * Love
 * Upgrade to paperback for just $100 extra. Get matching spine and back cover for your book. Contact me for upgrading or drop in a line when you place the order.

Purchase will include hi resolution eBook cover design ready to upload to Amazon kindle, B&N Nook books and Smashwords.

Implementation of Title, Subtitle and Author name as well as any other text you like to the book cover design.

Exclusive premade book covers, designed using only Standard license royalty-free stock photos. Copyrights to the design transferred to client for all purchases.

 * https://www.creativeparamita.com/wp-content/uploads/2021/01/love-triangle.jpg
 */