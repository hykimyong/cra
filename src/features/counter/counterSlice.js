import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk(
    'users/fetchByIdStatus',
  async (value) => {
    const response = await axios.put("/counter/increment",{value : value})
    return response.data
  }
)

//redux스토어 생성, redux devtool사용가능
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0
    },
    reducers: {
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload;
        }
    },
    extraReducers: {
        [fetchIncrement.fulfilled] : (state,action)=>{
            state.value = action.payload.value;
        },
    }
});

export const {increment,decrement,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
