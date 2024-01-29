
import { configureStore } from '@reduxjs/toolkit';
import notesItems from './NotesSlice';
import searchItems from './SearchSlice';

export default configureStore({
    reducer: {
        notesItems: notesItems,
        searchItems: searchItems,
    }
})