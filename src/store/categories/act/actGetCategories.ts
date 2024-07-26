import { TCategory } from "@/types/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


type TResponse = TCategory
 


const actGetCategories = createAsyncThunk("categories/actGetCategories", async(_, thunkAPI)=> {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get<TResponse>('http://localhost:5005/categories');
        // const data = response.data.map(el=>el.)
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue('An unexpected error')
        }
    }
});


export default actGetCategories;