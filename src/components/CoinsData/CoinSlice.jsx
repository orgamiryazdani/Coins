import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



export const getAsyncCoins = createAsyncThunk("coins/getAsyncCoins", async (value, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${value ? value : ""}`);

        return response.data;

    } catch (error) {
        return rejectWithValue([], error)
    }
});

const initialState = {
    coins: [],
    error: null,
    loading: false,
}

const CoinSlice = createSlice({
    name: "coins",
    initialState: initialState,
    extraReducers: {
        [getAsyncCoins.fulfilled]: (state, action) => {
            return { ...state, coins: action.payload.length > 1 ? action.payload : [action.payload], loading: false, error: null };
        },
        [getAsyncCoins.pending]: (state, action) => {
            return { ...state, coins: [], loading: true, error: null };
        },
        [getAsyncCoins.rejected]: (state, action) => {
            return { ...state, coins: [], loading: false, error: action.error.message };
        },
    }
})

export default CoinSlice.reducer;