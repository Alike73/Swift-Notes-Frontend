import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../api/FetchNotes";
import { useEffect } from "react";
import { getSelectedCategory, setDoneNotesCount } from "../../Redux/NotesSlice";
import { getSearchTerm } from "../../Redux/SearchSlice";
import NotesCard from "../../components/notesComponents/NotesCard";
import NotesNavbar from "../../components/notesComponents/NotesNavbar";
import SearchInput from "../../components/notesComponents/SearchInput";
import NotesWarningText from "../../components/notesComponents/NotesWarningText";


const Notes = ({ myNotes, setMyNotes, updatingInInput }) => {

    const dispatch = useDispatch();
    const searchTerm = useSelector(getSearchTerm);
    const selectedCategory = useSelector(getSelectedCategory);

    useEffect(() => {
        const handleDoneNotesCount = () => {
            let count = 0;
            myNotes.forEach((note) => {
                const storedIsDone = localStorage.getItem(`note_${note._id}_isDone`);
                if (storedIsDone !== null && JSON.parse(storedIsDone)) {
                    count++;
                }
            });
            return count;
        };

        const count = handleDoneNotesCount();
        dispatch(setDoneNotesCount(count));
    }, [myNotes, dispatch]);

    // Filtered notes based on selected category and search term
    const filteredNotes = myNotes
        .filter((note) => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === note.category;
        })
        .filter((note) => {
            if (searchTerm === '') return true;
            return note.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

    return (
        <div className="modal fade" id="notes" tabIndex="-1" aria-labelledby="notesLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header px-3 py-1">
                        <NotesNavbar 
                            myNotes = { myNotes }
                        />
                        <i className="bi bi-x-square fs-1" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body notes_body_bg">
                        <div className="container">
                        <div className="d-flex justify-content-center mb-3">
                            <SearchInput />
                        </div>
                            {filteredNotes.length === 0 ? (
                                <NotesWarningText />
                                ) : (
                                    filteredNotes.map((note, index) => (
                                        <NotesCard
                                            key={note._id}
                                            myNoteId={note._id}
                                            index={index + 1}
                                            noteTitle={note.title}
                                            noteText={note.text}
                                            createdAt = { note.createdAt } 
                                            updatingInInput={() => updatingInInput(note._id, note.title, note.text, note.category, note.noteDate)}
                                            deleteNote={() => deleteNote(note._id, setMyNotes)}
                                            myNotes={myNotes}
                                        />
                                    ))
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Notes;