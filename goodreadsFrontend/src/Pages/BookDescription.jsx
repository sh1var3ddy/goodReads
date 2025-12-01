import Layout from "Layouts/Layout";
import { useLocation } from "react-router-dom";
import BookImage from 'Assets/Images/book.png';
import { useEffect } from "react";
import {BiUser} from "react-icons/bi";

export default function BookDescription(){
    const {state} = useLocation();

    // useEffect(()=>{
    //     console.log(state);
    // },[])
   
    return(
       <Layout>
        {
            state?._id && (
                <div className="my-5 flex items-start justify-center gap-5 flex-col md:flex-row">
                    <div className="basis-1/3">
                        <img  className="w-full" src={BookImage} alt = "book" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-10">
                        <div className="text-white text-4xl">
                            {state?.title}
                        </div>
                        <div className="text-white text-xl w-3/4">
                            {state?.description}
                        </div>
                        <div className=" flex items-center text-2xl text-yellow-400">
                            <div>
                                <BiUser/>
                            </div>
                            <div>
                                {state?.author?.name}
                            </div>
                        </div>
                        <div className="flex justify-start items-start flex-wrap gap-3">
                            {state.genres.map((genre)=>{
                                return <div key={genre._id} className="tabs tabs-boxed tab-active text-xl px-2 py-1">{genre.name}</div>
                            })}
                        </div>
                        <div className="text-xl">
                            Pages: <span className="text-yellow-400">{state.pages}</span>
                        </div>
                        <div className="text-xl">
                            Publish Date: <span className="text-yellow-400">{state.publishDate}</span>
                        </div>
                    </div> 
                </div>
            )
        }
       </Layout>
    )
}