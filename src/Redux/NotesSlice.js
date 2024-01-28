import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notesItems',

    initialState: {
        doneNotesCount: 0,
    },
    reducers: {
        setDoneNotesCount: (state, action) => {
            const countUpdater = typeof action.payload === 'function' ? action.payload : () => action.payload;

            // Update the state asynchronously to handle side effects
            state.doneNotesCount = countUpdater(state.doneNotesCount);
        }
    },
});

export const getDoneNotesCount = (state) => state.notesItems.doneNotesCount;

export const { setDoneNotesCount } = notesSlice.actions;
export default notesSlice.reducer;












// import { createSlice } from '@reduxjs/toolkit';

// export const notesSlice = createSlice({
//     name: 'notesItems',

//     initialState: {
//         doneNotesCount: [],
//     },
//     reducers: {
//         setDoneNotesCount: (state, action) => {
//             // If the payload is a function, execute it with the current state and update the count
//             const countUpdater = typeof action.payload === 'function' ? action.payload : () => action.payload;
//             state.doneNotesCount = countUpdater(state.doneNotesCount);
//         }
//         // setDoneNotesCount: (state, action) => {
//         //     state.doneNotesCount = action.payload;
//         // }
//     },
    
// });

// export const getDoneNotesCount = state => state.notesItems.doneNotesCount;

// export const { setDoneNotesCount } = notesSlice.actions;
// export default notesSlice.reducer;