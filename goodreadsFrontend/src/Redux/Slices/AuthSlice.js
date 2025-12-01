import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    token: localStorage.getItem('token') ||'',
    username: localStorage.getItem('username') || ''
}

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const promise = axiosInstance.post("/signup", data);

      toast.promise(promise, {
        loading: "Creating your account...",
        success: "Account created successfully!",
        error: "Could not create account. Please try again.",
      });

      const response = await promise;
      return response.data;  
    } catch (error) {
    //   console.log("Error in signup thunk", error?.response?.data?.message);
      toast.error(`Signup failed. ${error?.response?.data?.message}`);
      return rejectWithValue(err.response?.data || "Signup failed");
    }
  }
);

export const signin = createAsyncThunk(
    'auth/signin',
    async (data, { rejectWithValue }) => {
    try {
      const promise = axiosInstance.post("/signin", data);

      toast.promise(promise, {
        loading: "Logging your account...",
        success: "Logged in successfully!",
        error: "Could not login account. Please try again.",
      });

      const response = await promise;
      return response.data;  
    } catch (error) {
    //   console.log("Error in signin thunk", error.response.data.err);
      toast.error(`Signin failed. ${error?.response?.data?.err}`);

      // Optional: send error payload in a controlled way
      return rejectWithValue(err.response?.data || "Signin failed");
    }
  }
)

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
      logout: (state)=>{
        state.isLoggedIn= false;
        state.token= '';
        state.username=  '';
        localStorage.clear();
      }
    },
    extraReducers: (builder)=>{
        builder.addCase(signin.fulfilled,(state,action)=>{
            if(action?.payload?.data){
                const recievedData = action?.payload?.data;
                state.isLoggedIn = (recievedData !== undefined);
                state.token = recievedData?.token
                state.username = recievedData?.username
                localStorage.setItem("isLoggedIn", state.isLoggedIn);
                localStorage.setItem("token",state.token);
                localStorage.setItem("username",state.username);
            }
        })
    }
})

export const {logout} = authSlice.actions; 

export default authSlice.reducer;