import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notesItems',

    initialState: {
        doneNotesCount: 0,
    },
    reducers: {
        setDoneNotesCount: (state, action) => {
            state.doneNotesCount = action.payload;
        }
    },
});

export const getDoneNotesCount = (state) => state.notesItems.doneNotesCount;

export const { setDoneNotesCount } = notesSlice.actions;
export default notesSlice.reducer;
