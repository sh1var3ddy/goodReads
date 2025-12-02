import BookCard from "Components/BookCard/BookCard";
import Layout from "Layouts/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "Redux/Slices/BookSlice";
import BookCardLoader from "Components/Utils/BookCardLoader";

export default function Dashboard(){
    const bookState = useSelector((state)=>state.book);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    async function loadBooks(){
        if(bookState.bookList.length === 0){
            setLoading(true);
            await dispatch(getAllBooks());
            setLoading(false);
        } else {
            setLoading(false);
        }
    }

    useEffect(()=>{
        loadBooks();
    },[])

    return (
        <Layout>
            {loading 
                ? Array.from({length: 3}).map((_, i) => <BookCardLoader key={i}/>) // render 5 loaders
                : bookState.bookList.map(book => <BookCard key={book._id} data={book} />)
            }
        </Layout>
    )
}
