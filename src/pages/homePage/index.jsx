import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
// import { BASE_URL } from '../../constants';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;


const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [downloadedBooks, setDownloadedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fisher-Yates Shuffle to randomize the array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Fetch library books
    const getBooks = async () => {
        try {
            setIsLoading(true);
            setError(null);
            console.log('Fetching from:', VITE_BASE_URL); // Debug log
            const response = await axios.get(`${VITE_BASE_URL}/library`);
            console.table(response.data);
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
            setError('Failed to fetch books. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch library books and reviews for "Most Downloaded Books" logic
    const getDownloadedBooks = async () => {
        try {
            const libraryResponse = await axios.get(`${VITE_BASE_URL}/library`);
            const reviewResponse = await axios.get(`${VITE_BASE_URL}/review`);
            const booksWithRating = [];

            // Match reviews with books and filter by rating > 5
            reviewResponse.data.forEach((review) => {
                const matchingBook = libraryResponse.data.find(book => book.title === review.book);
                if (matchingBook && review.rating > 5) {
                    booksWithRating.push(matchingBook);
                }
            });

            setDownloadedBooks(booksWithRating);
        } catch (error) {
            console.log("Error fetching downloaded books", error);
        }
    };

    useEffect(() => {
        getBooks();
        getDownloadedBooks();
    }, []);

    // Randomize books for the Fisher-Yates shuffle section
    const randomizedBooks = shuffleArray([...books]);

    return (
        <div>
            <Navbar />
            <Hero />
            <div className='flex flex-col justify-center items-center'>
                {error && (
                    <div className="text-red-500 text-center my-4">
                        {error}
                    </div>
                )}
                {isLoading ? (
                    <div className="text-center my-4">
                        Loading books...
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center items-center'>
                            {/* New Arrivals Section */}
                            <div className="read-book overflow-hidden mt-16">
                                <div className="top-bar h-[7vh] w-[80vw] flex flex-row justify-between items-center">
                                    <h1 className='text-[40px] font-semibold ml-4'>New Arrivals</h1>
                                    <p><a href="#" className='text-[24px] underline'><Link to="/booklist">See all</Link></a> <span>&gt;</span></p>
                                </div>
                                <div className="main-bar w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-2 mb-2">
                                    {books.slice(Math.max(books.length - 6, 0)).map((book) => (
                                        <Link 
                                            key={book._id} 
                                            to={`/book/${book._id}`} // Navigate to the single book page with the book ID
                                            className="flex flex-col items-center gap-y-4 p-4 rounded-lg shadow-lg cursor-pointer"
                                        >
                                            <span className="block rounded-lg overflow-hidden">
                                                <img 
                                                    src={book.img_url} 
                                                    alt="img" 
                                                    className="w-[250px] h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
                                                />
                                            </span>
                                            <p className="text-lg font-semibold text-[#E54224]">{book.title}</p>
                                            <h3 className="text-base text-black font-medium">{book.author}</h3>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Most Downloaded Books Section */}
                            <div className="downloaded-books overflow-hidden mt-16">
                                <div className="top-bar h-[7vh] w-[80vw] flex flex-row justify-between items-center">
                                    <h1 className='text-[40px] font-semibold ml-4'>Most Downloaded</h1>
                                    <p><a href="#" className='text-[24px] underline'><Link to="/booklist">See all</Link></a> <span>&gt;</span></p>
                                </div>
                                <div className="main-bar w-[80vw] grid grid-cols-6 gap-4 mt-2 mb-2">
                                    {downloadedBooks.slice(0, 6).map((book) => (
                                        <Link 
                                            key={book._id} 
                                            to={`/book/${book._id}`} // Navigate to the single book page with the book ID
                                            className="flex flex-col items-center gap-y-4 p-4 rounded-lg shadow-lg cursor-pointer"
                                        >
                                            <span className="block rounded-lg overflow-hidden">
                                                <img 
                                                    src={book.img_url} 
                                                    alt="img" 
                                                    className="w-[250px] h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
                                                />
                                            </span>
                                            <p className="text-lg font-semibold text-[#E54224]">{book.title}</p>
                                            <h3 className="text-base text-black font-medium">{book.author}</h3>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Randomized Books Section */}
                            <div className="randomized-books overflow-hidden mt-16">
                                <div className="top-bar h-[7vh] w-[80vw] flex flex-row justify-between items-center">
                                    <h1 className='text-[40px] font-semibold ml-4'>Curated Surprises</h1>
                                    <p><a href="#" className='text-[24px] underline'><Link to="/booklist">See all</Link></a> <span>&gt;</span></p>
                                </div>
                                <div className="main-bar w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-2 mb-2">
                                    {randomizedBooks.slice(0, 6).map((book) => (
                                        <Link 
                                            key={book._id} 
                                            to={`/book/${book._id}`} // Navigate to the single book page with the book ID
                                            className="flex flex-col items-center gap-y-4 p-4 rounded-lg shadow-lg cursor-pointer"
                                        >
                                            <span className="block rounded-lg overflow-hidden">
                                                <img 
                                                    src={book.img_url} 
                                                    alt="img" 
                                                    className="w-[400px] h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
                                                />
                                            </span>
                                            <p className="text-lg font-semibold text-[#E54224]">{book.title}</p>
                                            <h3 className="text-base text-black font-medium">{book.author}</h3>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
