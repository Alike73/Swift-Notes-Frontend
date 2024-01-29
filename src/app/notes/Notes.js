import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../api/FetchNotes";
import NotesCard from "../../components/notesComponents/NotesCard";
import NotesNavbar from "../../components/notesComponents/NotesNavbar";
import SearchInput from "../../components/notesComponents/SearchInput";
import { useEffect } from "react";
import { setDoneNotesCount } from "../../Redux/NotesSlice";
import { getSearchTerm } from "../../Redux/SearchSlice";


const Notes = ({ myNotes, setMyNotes, updatingInInput }) => {

    const dispatch = useDispatch();
    const searchTerm = useSelector(getSearchTerm);

    useEffect(() => {
        const handleDoneNotesCount = () => {
            let count = 0;
            myNotes.forEach((note) => {
                const storedIsDone = localStorage.getItem(`note_${note.title}_isDone`);
                if (storedIsDone !== null && JSON.parse(storedIsDone)) {
                    count++;
                }
            });
            return count;
        };
    
        // Calculate the count
        const count = handleDoneNotesCount();
    
        // Dispatch setDoneNotesCount with the calculated count
        dispatch(setDoneNotesCount(count));
    }, [myNotes, dispatch]);
    

    return (
        <div className="modal fade" id="notes" tabIndex="-1" aria-labelledby="notesLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header px-3 py-1">
                        <NotesNavbar 
                            myNotes = { myNotes }
                        />
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <i className="bi bi-x-square fs-1" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body">
                        <div className="container">
                        <div className="d-flex justify-content-center mb-3">
                            <SearchInput />
                        </div>
                        { myNotes
                            .filter((note) => {
                                if (searchTerm === '') return true;
                                return note.title.toLowerCase().includes(searchTerm.toLowerCase());
                            })
                            .map((note, index) => <NotesCard 
                            key = { note._id }
                            index={index + 1}
                            noteTitle = { note.title } 
                            noteText = { note.text }
                            updatingInInput = {() => updatingInInput(note._id, note.title, note.text)}
                            deleteNote = {() => deleteNote(note._id, setMyNotes)}
                            myNotes = { myNotes }
                        />)}
                            
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default Notes;