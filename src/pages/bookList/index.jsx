// import aragon from '../assets/images/books/aragon.jpg'

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import K from "../../constants";
import Hero from "./components/Hero";
<Navbar />

const BookList = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <div className="grid grid-cols-4 w-4/5 mx-auto my-auto my-20 gap-12 mt-8">
            {
                K.OFFERS.map((offer, index) => {
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
            }
        </div>
        <Footer/>
        </>
    );
};




export default BookList
