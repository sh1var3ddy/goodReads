import {Route, Routes} from "react-router-dom";
import Home from "Pages/Home.jsx";
import NotFound from "Pages/NotFound.jsx";
function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
export default MainRoutes;