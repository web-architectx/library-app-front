import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import K from "../../constants";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className='flex flex-col justify-center items-center'>
            {/* <div className='flex flex-col justify-center items-center bg-black '> */}
                <div className='flex flex-col justify-center items-center  '>
                {/* <div className='flex flex-col justify-center items-center bg-black '> */}
                    <div className="read-book overflow-hidden mt-16 ">
                    {/* <div className="read-book overflow-hidden bg-yellow-600 "> */}
                        <div className="top-bar h-[7vh] w-[80vw]  flex flex-row justify-between items-center">
                        {/* <div className="top-bar h-[7vh] w-[80vw] bg-indigo-300 flex flex-row justify-between items-center"> */}
                            <h1 className='text-[40px] font-semibold'>Most Read Books</h1>
                            <p><a href="#" className='text-[24px] underline'>See all</a> <span>&gt;</span></p>
                        </div>
                        <div className="main-bar  w-[80vw]   grid grid-cols-6 w-5/5 mx-auto my-auto my-20 gap-4 mt-2 mb-2">
                        {/* <div className="main-bar  w-[80vw] bg-yellow-200 grid grid-cols-6 w-4/5 mx-auto my-auto my-20 gap-4 mt-8 mb-2"> */}
                            {
                                K.OFFERS.slice(0, 6).map((offer, index) => {
                                    console.log(`${index}: ${offer.author}`);
                                    return (
                                        <div key={index} className="flex flex-col items-center gap-y-2 p-4 rounded shadow-lg">
                                            <span className="block rounded-lg overflow-hidden">
                                                <img src={offer.image} alt="img" className="w-[200px] h-[300px] object-cover" />
                                            </span>
                                            <p className="text-lg font-semibold text-[#E54224]">{offer.title}</p>
                                            <h3 className="text-base text-white font-medium">{offer.author}</h3>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="downlaoded-book">

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage