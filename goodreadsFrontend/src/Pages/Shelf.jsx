import Layout from "Layouts/Layout";
import BookImage from "Assets/Images/book.png"
import { getAllBookShelves } from "Redux/Slices/ShelfSlice";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Shelf(){

    const shelfState = useSelector((state)=>state.shelf);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [activeShelf, setActiveShelf] = useState(null);
    const [books, setBooks] = useState([]);

    async function loadShelfes(){
        if(shelfState.shelfList.length===0){
            const response = await dispatch(getAllBookShelves());
            // console.log(response?.payload?.data?.length)
            if(response?.payload?.data?.length>0){
                //  console.log(response?.payload?.data?.length)
                setActiveShelf(response.payload.data[0]._id);
                setBooks(response.payload.data.books);
            }
            // console.log(response);
        } else if(shelfState.shelfList.length > 0) {
            
            setBooks(shelfState.shelfList[0].books);
            setActiveShelf(shelfState.shelfList[0]._id);
        }
        // console.log(shelfState.shelfList.length);
    }

    function changeActiveShelf(shelfId){
        setActiveShelf(shelfId);
        shelfState.shelfList.forEach(shelf=>{
            if(shelf._id === shelfId){
                setBooks(shelf.books);
            }
        })
    }


    useEffect(()=>{
        loadShelfes();
    },[])


    return (
        <Layout>
            <div className="flex justify-start items-start gap-32">
                <div className="flex flex-col justify-start items-start">
                    <div className="mt-3 mb-3">
                        {shelfState.shelfList.length>0 &&
                            shelfState.shelfList.map((shelf)=>{
                                return (
                                    <div onClick={()=>changeActiveShelf(shelf._id)} key={shelf._id} className="mt-3 mb-3">
                                        <button 
                                            className={`btn-${activeShelf===shelf._id?'primary':'warning'} 
                                                bg-${activeShelf===shelf._id?'primary':'warning'} px-2 py-1 text-2xl`}
                                        >
                                                {shelf.name}
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Genre</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                    
                        {books?.length>0 &&
                            books.map((book)=>{
                                return (
                                <tr  className="cursor-pointer hover:bg-slate-700" key={book._id} onClick={()=>{
                                    navigate("/book/description",{state:{...book}})
                                }}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                    src={BookImage}
                                                    alt="Book Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div>
                                        <div className="font-bold text-xl">
                                            {book.title}
                                        </div>
                                    </div>
                                    </td>
                                    <td>{book.author?.name}</td>
                                    <td>
                                        {book?.rating}
                                    </td>
                                    <td>
                                        {book?.genres?.length
                                            ? book.genres.map(g => g.name).join(", ")
                                            : "No genres"}
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs hover:bg-primary">details</button>
                                    </th>
                                </tr>
                            )})
                        }
                        </tbody>
                        {/* foot */}
                        {/* <tfoot>
                        <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>
                                Genre
                            </th>
                            <th></th>
                        </tr>
                        </tfoot> */}
                    </table>
                </div>
            </div>
           
        </Layout>
    )
}