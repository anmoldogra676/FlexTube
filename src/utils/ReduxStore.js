import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

let store = configureStore({
    reducer:{
        app:appSlice,
    }
})
export default store