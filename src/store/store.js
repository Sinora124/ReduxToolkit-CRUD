import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "./posts/PostSlice";

export const store = configureStore({
    reducer: {
        PostReducer: PostSlice.reducer
    }
})