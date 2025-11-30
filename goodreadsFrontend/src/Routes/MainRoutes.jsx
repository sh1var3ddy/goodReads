import {Route, Routes} from "react-router-dom";
import Home from "Pages/Home.jsx";
import Signup from "Pages/Auth/Signup.jsx";
import SignIn from "Pages/Auth/Signin.jsx";
import NotFound from "Pages/NotFound.jsx";
function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/signin" element = {<SignIn/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
export default MainRoutes;