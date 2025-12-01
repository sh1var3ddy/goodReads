import BookImage from 'Assets/Images/book.png';
import {BiUser} from "react-icons/bi";

export default function BookCard({title, author, description}){
    return (
        <div className="card card-side bg-gray-800 shadow-xl shadow-md h-80 w-9/12 mt-8">
            <figure className='h-full'>
                <img
                className='h-full'
                src={BookImage}
                alt="Movie" 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <div className='mt-24 flex justify-between items-center mb-8'>
                    <div className="flex flex-col gap-3 text-white text-xl">
                        <div className=" flex justify-start items-center">
                            <div>
                                <BiUser/>
                            </div>
                            <div>
                                {author}
                            </div>
                        </div>
                        <div>
                            {description}
                        </div>
                    </div>
                    
                     <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-primary">More Details</button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}