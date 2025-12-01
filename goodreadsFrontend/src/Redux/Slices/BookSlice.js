import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    bookList:[]
}

export const getAllBooks = createAsyncThunk(
  'course/getAllBooks',
  async (data,{ rejectWithValue }) => {
     try {
      const promise = axiosInstance.get("/books", data);

      toast.promise(promise, {
        loading: "Loading books data...",
        success: "Succesfully loaded all books",
        error: "Something went wrong",
      });
      const response = await promise;
      return response.data;  
    } catch (error) {
      toast.error("Something went wrong. Cannot download books");
      return rejectWithValue(err.response?.data || "Something went wrong while fetching books data");
    }
  }
);


const bookSlice = createSlice({
    name:'book',
    initialState:initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllBooks.fulfilled,(state,action)=>{
            // console.log(action.payload.data);
            if(action?.payload?.data){
              state.bookList = action?.payload?.data;
            }
        })
    }
})

export default bookSlice.reducer;