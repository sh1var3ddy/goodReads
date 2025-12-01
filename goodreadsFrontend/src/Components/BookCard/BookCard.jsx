import BookImage from 'Assets/Images/book.png';
import {BiUser} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export default function BookCard({data}){
    const navigate = useNavigate();
    return (
        <div className="card md:card-side bg-gray-800 shadow-xl shadow-md md:h-60 w-full mt-8 mb-8">
            <figure className='h-full'>
                <img
                    className='md:h-full h-1/5'
                    src={BookImage}
                    alt="Movie" 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{data?.title}</h2>
                <div className='mt-24 flex justify-between items-center mb-8 gap-4'>
                    <div className="flex flex-col gap-3 text-white text-xl">
                        <div className=" flex justify-start gap-12 md:gap-5 items-center">
                            <div>
                                <BiUser/>
                            </div>
                            <div>
                                {data?.author?.name}
                            </div>
                        </div>
                        <div>
                            {data?.description}
                        </div>
                    </div>
                    
                     <div className="card-actions justify-end">
                        <button 
                            className="btn btn-primary bg-primary"
                            onClick={()=>navigate("/book/description", {state:{...data}})}
                        >
                                More Details
                        </button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}