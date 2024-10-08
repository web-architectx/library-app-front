// import aragon from '../assets/images/books/aragon.jpg'
// import K from '../constants/index'
import K from "../../constants";

const BookList = () => {
  return (
    <div className='grid grid-cols-4 w-2/5 mx-auto my-auto my-20 gap-12'>
    {
        K.OFFERS.map((offer, index) => {
            console.log(`${index}: ${offer.author}`);
            return(
            <div key={index} className='flex flex-col gap-y-2 mt-8'>
                <span className='p-2 text-2xl text-white rounded-[10px]'>
                    <img src={offer.image} alt="img" className="w-[60vw] h-[20vh]" />
                </span>
                <p className="text-[#E54324]">{offer.title}</p>
                <h3 className='text-[15px] font-semibold  '>{offer.author}</h3>
               
            </div>
            )
        })
    }
</div>
  )
}

export default BookList
