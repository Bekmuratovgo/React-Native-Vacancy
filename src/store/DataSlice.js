import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    name: null,
    isLoading: false,
    error: ''
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataFetchingLoading (state, action) {
            state.isLoading = action.payload;
        },
        dataFetchingError (state, action) {
            state.error = action.payload;
        },
        userName (state, action) {
            state.name = action.payload;
            state.isLoading = false;            
        },
        dataFetch (state, action) {
            state.data = action.payload;
        }
    }
})

export default dataSlice.reducer;