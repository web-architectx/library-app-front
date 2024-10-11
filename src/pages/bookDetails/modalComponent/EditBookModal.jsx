import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
// import {BASE_URL } from '../../constants/'
import { BASE_URL } from '../../../constants';

const EditBookModal = ({ isOpen, onClose, book, onUpdate }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [summary, setSummary] = useState(book.summary);
  const [genre, setGenre] = useState(book.genre);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBook = { title, author, summary, genre };
      await axios.put(`${BASE_URL}/library/${book.id}`, updatedBook);
      onUpdate(updatedBook); // Call the onUpdate function passed as a prop
      Swal.fire('Success', 'Book details updated successfully!', 'success');
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error updating book:", error);
      Swal.fire('Error', 'Failed to update book details.', 'error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
          />
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
            required
          />
                    <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="GGere"
            required
          />
          <button type="submit">Update Book</button>
        </form>
      </div>
    </div>
  );
};

export default EditBookModal;
           