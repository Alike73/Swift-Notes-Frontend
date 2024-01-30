import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notesItems',

    initialState: {
        doneNotesCount: 0,
        selectedCategory: 'ALL',
    },
    reducers: {
        setDoneNotesCount: (state, action) => {
            state.doneNotesCount = action.payload;
        },
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const getSelectedCategory = state => state.notesItems.selectedCategory;
export const getDoneNotesCount = (state) => state.notesItems.doneNotesCount;

export const { setDoneNotesCount, filterCategory } = notesSlice.actions;
export default notesSlice.reducer;
