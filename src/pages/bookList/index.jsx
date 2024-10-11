import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // Import Link
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BASE_URL } from '../../constants';
import Hero from "./components/Hero";
import axios from 'axios';

const BookList = () => {
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
    }, []);

    return (
        <>
            <Navbar />
            <Hero page="Books" />
            <div className="grid grid-cols-4 w-4/5 mx-auto my-auto my-20 gap-12 mt-8">
                {
                    books.map((book) => (
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
                    ))
                }
            </div>
            <Footer />
        </>
    );
};

export default BookList;
