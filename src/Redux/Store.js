
import { configureStore } from '@reduxjs/toolkit';
import notesItems from './NotesSlice';

export default configureStore({
    reducer: {
        notesItems: notesItems,
    }
})