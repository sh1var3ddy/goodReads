import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { logout } from "Redux/Slices/AuthSlice";

export default function Navbar(){

    const state = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    function onLogout(){
        dispatch(logout());
    }

    return (
        <div className="navbar bg-gray-800 px-15">
            <div className="flex-1">
                <Link to = "/dashboard" className="btn btn-success normal-case text-xl">BookShelf</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {state.isLoggedIn && <li><Link>Shelfs</Link></li>}
                    {state.isLoggedIn && <li><Link>{state.username}</Link></li>}
                    <li>
                        <details>
                            <summary className="block list-none cursor-pointer">Options</summary>
                            <ul className="p-2 bg-base-100">
                                {state.isLoggedIn && <li><Link to="/signin" onClick={onLogout}>Logout</Link></li>}
                                {!state.isLoggedIn && <li><Link to="/signup" >Sign Up</Link></li>}
                                {!state.isLoggedIn && <li><Link to="/signin" >Sign In</Link></li>}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}