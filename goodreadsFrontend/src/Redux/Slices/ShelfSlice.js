import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    shelfList:[]
}

export const getAllBookShelves = createAsyncThunk(
  'shelf/getAllBookShelves',
  async (data,{ rejectWithValue }) => {
    try {
        const promise = axiosInstance.get("/bookshelves", 
            {headers:{
                'x-access-token': localStorage.getItem('token')
            }},
            data);

        toast.promise(promise, {
            loading: "Loading book shelves data...",
            success: "Succesfully loaded all book shelves",
            error: "Something went wrong while loading book shelves",
        });
        const response = await promise;
        return response.data;  
    } catch (error) {   
        toast.error("Something went wrong. Cannot load book shelves");
        return rejectWithValue(err.response?.data || "Something went wrong while fetching books shelves");
    }
  }
);

export const addBookToShelf = createAsyncThunk(
  'shelf/addBookToShelf',
  async (data,{ rejectWithValue }) => {
    try {
        const promise = axiosInstance.patch(`/bookshelves/${data.shelfName}/add/${data.bookId}`, {},
            {headers:{
                'x-access-token': localStorage.getItem('token')
            }});

        toast.promise(promise, {
            loading: "Adding book to shelf...",
            success: "Succesfully added book to shelf",
            error: "Something went wrong while adding book to shelf",
        });
        const response = await promise;
        return response.data;  
    } catch (error) {   
        toast.error("Something went wrong. Cannot add book to shelf");
        return rejectWithValue(err.response?.data || "Something went wrong while adding book to shelf");
    }
  }
);


const shelfSlice = createSlice({
    name:'shelf',
    initialState:initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllBookShelves.fulfilled,(state,action)=>{
            if(action?.payload?.data){
                state.shelfList = action?.payload?.data;
            }
        })
        .addCase(addBookToShelf.fulfilled,(state,action)=>{

        })
    }
})

export default shelfSlice.reducer;