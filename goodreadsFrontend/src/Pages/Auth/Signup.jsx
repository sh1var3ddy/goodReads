import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { signup } from "Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signUpDetails,setSignUpDetails] = useState({
        username:"",
        email:"",
        password:""
    })

    function handleFormChange(e){
        const {name,value} = e.target;
        setSignUpDetails({
            ...signUpDetails,
            [name]:value
        })
    }

    function resetForm(){
        setSignUpDetails({
            username:'',
            email:'',
            password:'',
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        const result = await dispatch(signup(signUpDetails));
        if (signup.fulfilled.match(result)) {
            navigate("/signin");
        }
        resetForm();
    }

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className = "text-white text-5xl">Create a new Account</h1>
            </div>
            <div className="mt-6">
                <p className = "text-white">
                    Already have an account? 
                    <Link to = "/signin">
                        <button className="btn btn-success bg-green-400 rounded-md px-2 mx-5 hover:bg-green-600">
                            Sign In
                        </button>
                    </Link>
                </p>
            </div>
            
            <div className="w-full mt-4">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="false">
                    <div className="my-5 w-1/3">
                        <input onChange={handleFormChange} name="username" className="w-full px-6 py-3 bg-white text-black rounded-md" 
                        type="text" placeholder="username..." value={signUpDetails.name}/>
                    </div>
                    <div className="my-5 w-1/3">
                        <input onChange={handleFormChange} name="email" className=" w-full px-6 py-3 bg-white text-black rounded-md" 
                        type="email" placeholder="email..." value={signUpDetails.email}/>
                    </div>
                    <div className="my-5 w-1/3">
                        <input onChange={handleFormChange} name="password" className="w-full px-6 py-3 bg-white text-black rounded-md" 
                            type="password" placeholder="password..." value={signUpDetails.password}
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <button className="btn btn-success w-full  bg-green-400 rounded-md px-2 py-1 hover:bg-green-600" type="submit">
                            Submit
                        </button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    );
}
export default Signup;