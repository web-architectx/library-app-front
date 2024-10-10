import React, { useState, useEffect } from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import { BASE_URL } from '../../constants';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/library`);
            console.table(response.data);
            setBooks(response.data);
        } catch (error) {
            console.log("Error fetching books", error);
        }
    };

    useEffect(() => {
        getBooks();
    }, []); // Correct usage of useEffect

    return (
        <div>
            <Navbar />
            <Hero />
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className="read-book overflow-hidden mt-16">
                        <div className="top-bar h-[7vh] w-[80vw] flex flex-row justify-between items-center">
                            <h1 className='text-[40px] font-semibold'>Most Read Books</h1>
                            <p>
                                <Link to="/booklist" className='text-[24px] underline'>See all</Link> <span>&gt;</span>
                            </p>
                        </div>
                        <div className="main-bar w-[80vw] grid grid-cols-6 gap-4 mx-auto my-20">
                            { 
                                books.slice(0, 6).map((book) => {
                                    console.log('Image URL:', book.img_url); // Log the image URL
                                    return (
                                        <div key={book._id} className="flex flex-col items-center gap-y-2 p-4 rounded shadow-lg">
                                            <span className="block rounded-lg overflow-hidden">
                                                <img 
                                                    src={book.img_url} 
                                                    alt={book.title} 
                                                    className="w-[200px] h-[300px] object-cover"
                                                     
                                                />
                                            </span>
                                            <p className="text-lg font-semibold text-[#E54224]">{book.title}</p>
                                            <h3 className="text-base text-white font-medium">{book.author}</h3>
                                        </div>
                                    );
                                })
                            } 
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;