import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notesItems',

    initialState: {
        doneNotesCount: 0,
        selectedCategory: 'ALL',
        editing: false,
    },
    reducers: {
        setDoneNotesCount: (state, action) => {
            state.doneNotesCount = action.payload;
        },
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setEditing: (state, action) => {
            state.editing = action.payload;
        },
    },
});

export const getEditing = state => state.notesItems.editing;
export const getSelectedCategory = state => state.notesItems.selectedCategory;
export const getDoneNotesCount = (state) => state.notesItems.doneNotesCount;

export const { setDoneNotesCount, filterCategory, setEditing } = notesSlice.actions;
export default notesSlice.reducer;
