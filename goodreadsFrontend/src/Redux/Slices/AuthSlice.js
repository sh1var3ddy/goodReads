import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedin: localStorage.getItem('isLoggedIn') || false,
    token: localStorage.getItem('token') ||'',
    username: localStorage.getItem('username') || ''
}

export const signup = createAsyncThunk(
    'auth/signup',
    async (data)=>{
        try{
            const response = axiosInstance.post("/signup",data);
            toast.promise(response,{
                loading:"Creating your account...",
                success:"Account created successfully!",
                error:"Could not create account. Please try again."
            });
            return await response;

        }catch(err){
            console.log("Error in signup thunk",err);
            toast.error("Signup failed.");
        }

});

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    extraReducers: ()=>{

    }
})

export default authSlice.reducer;