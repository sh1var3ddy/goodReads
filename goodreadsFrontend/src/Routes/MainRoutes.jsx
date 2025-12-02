import {Route, Routes} from "react-router-dom";
// import Home from "Pages/Home.jsx";
// import Signup from "Pages/Auth/Signup.jsx";
// import SignIn from "Pages/Auth/Signin.jsx";
// import NotFound from "Pages/NotFound.jsx";
// import Dashboard from "Pages/Dashboard";
// import BookDescription from "Pages/BookDescription";
// import Shelf from "Pages/Shelf";
import { lazy } from "react";

const Home = lazy(()=>import("Pages/Home.jsx"));
const SignIn = lazy(()=>import("Pages/Auth/Signin.jsx"));
const Signup = lazy(()=>import("Pages/Auth/Signin.jsx"));
const Dashboard = lazy(()=>import("Pages/Dashboard"));
const Shelf = lazy(()=>import("Pages/Shelf"));
const BookDescription = lazy(()=>import("Pages/BookDescription"));
const NotFound = lazy(()=>import("Pages/NotFound.jsx"));


function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/signin" element = {<SignIn/>}/>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "book/description" element = {<BookDescription/>}/>
            <Route path = "/shelf" element = {<Shelf/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
export default MainRoutes;