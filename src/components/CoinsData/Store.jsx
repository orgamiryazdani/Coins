import { configureStore } from "@reduxjs/toolkit";
import CoinSlice from "./CoinSlice";


export const store = configureStore({
    reducer: {
        coins: CoinSlice,
    },
});