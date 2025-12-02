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
                    loading='lazy'
                />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title text-2xl font-semibold text-white">{data?.title}</h2>

                {/* Author & Description */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mt-4 md:mt-0">
                    {/* Author + Description */}
                    <div className="flex flex-col gap-3 text-white text-base max-w-full">
                        <div className="flex items-center gap-3">
                            <BiUser className="text-xl" />
                            <span className="font-medium">{data?.author?.name}</span>
                        </div>

                        {/* Description with line clamp */}
                        <div className="text-sm line-clamp-3 break-words">
                            {data?.description}
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="card-actions mt-2 md:mt-0">
                        <button
                            className="btn btn-primary bg-primary"
                            onClick={() => navigate("/book/description", { state: { ...data } })}
                        >
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}