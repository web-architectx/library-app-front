// import aragon from '../assets/images/books/aragon.jpg'

import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BASE_URL } from '../../constants'

// import K from "../../constants";
import Hero from "./components/Hero";
import axios from 'axios'

{/* <Navbar /> */}

const BookList = () => {
//  const response = await axios.post(`${BASE_URL}/books`,{
const [books , setBooks] = useState([]);
const [imageUrl, setImgUrl]= useState('');

const getBooks = async ()=>{
    try {
        const response = await axios.get(`${BASE_URL}/library`);
        // const response = await axios.get(`${BASE_URL}/todos`);  
    // const response = await axios.get(`${BASE_URL}/library`);
    console.table(response.data)
    setBooks(response.data)
    setImgUrl(response.data.img_url)
        
    } catch (error) {
        console.log("Error fetching books",error)
    }
}
useEffect(()=>{
    getBooks(),[];
})

    return (
        <>
        <Navbar/>
        <Hero page="Books"/>
        <div className="grid grid-cols-4 w-4/5 mx-auto my-auto my-20 gap-12 mt-8">
                {
                   
                books.map((book, index)=>{
                // books.slice(0,6).map((book, index)=>{
                    // return <div key={book.key} className="flex flex-col items-center gap-y-4 p-4  rounded-lg shadow-lg">{book.title}</div>
                    //  return <div key={book.key} className="flex flex-col items-center gap-y-4 p-4 bg-[#1E1E1E] rounded-lg shadow-lg">{book.author}</div> 
                    return (
                        <div key={book._id} className="flex flex-col items-center gap-y-4 p-4  rounded-lg shadow-lg">
                        {/* <div key={book._id} className="flex flex-col items-center gap-y-4 p-4 bg-[#1E1E1E] rounded-lg shadow-lg"> */}
                            <span className="block rounded-lg overflow-hidden">
                                <img src={book.img_url} alt="img" className="w-[250px] h-[350px] object-cover transition-transform duration-300 hover:scale-105" />
                            </span>
                            <p className="text-lg font-semibold text-[#E54224]">{book.title}</p>
                            <h3 className="text-base text-black font-medium">{book.author}</h3>
                        </div>
                    );
                })
            }
        </div>
        <Footer/>
        </>
    );
};




export default BookList

/**
 * 
 *  {/* K.OFFERS.map((offer, index) => {
                    console.log(`${index}: ${offer.author}`);
                    return (
                        <div key={index} className="flex flex-col items-center gap-y-4 p-4 bg-[#1E1E1E] rounded-lg shadow-lg">
                            <span className="block rounded-lg overflow-hidden">
                                <img src={offer.image} alt="img" className="w-[250px] h-[350px] object-cover transition-transform duration-300 hover:scale-105" />
                            </span>
                            <p className="text-lg font-semibold text-[#E54224]">{offer.title}</p>
                            <h3 className="text-base text-white font-medium">{offer.author}</h3>
                        </div>
                    );
                }) 
 */