import {Link} from "react-router-dom";

function Signin() {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className = "text-white text-5xl">Login to your account</h1>
            </div>
            
            <div className="w-full mt-4">
                <form className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="false">
                    <div className="my-5 w-1/3">
                        <input className="px-6 py-3 bg-white text-black rounded-md" type="email" placeholder="email..."/>
                    </div>
                    <div className="my-5 w-1/3">
                        <input className="px-6 py-3 bg-white text-black rounded-md" type="password" placeholder="password..."/>
                    </div>
                    <div className="my-5 w-1/3">
                        <button className="btn btn-success w-full  bg-green-400 rounded-md px-2 py-1 hover:bg-green-600" type="submit">
                            Submit
                        </button>
                    </div>
                    
                </form>
            </div>
            <div className="mt-6">
                <p className = "text-white">
                    Do not have an account? 
                    <Link to = "/signup">
                        <button className="btn btn-success bg-green-400 rounded-md px-2 mx-5 hover:bg-green-600">
                            Sign Up
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
}
export default Signin;