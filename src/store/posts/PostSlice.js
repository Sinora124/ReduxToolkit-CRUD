import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)  
    })
}
);

const initialState = {
    payload:[],
    error: undefined,
    loading: false,
};

export const PostSlice = createSlice({
    name: "Posts",
    initialState,
    reducers: {
        cleanFormSettingListData(state) {
            state.loading = false;
            state.payload = [];
            state.error = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.payload = action.payload;
        });
        builder.addCase(getPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
})

export default PostSlice