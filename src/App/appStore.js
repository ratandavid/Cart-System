import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Feature/Cartlist/Cartlistslice";

export const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }

})