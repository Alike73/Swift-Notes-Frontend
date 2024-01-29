import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'searchItems',

    initialState: {
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
});

export const getSearchTerm = state => state.searchItems.searchTerm;

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;