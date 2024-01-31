import { useState, useEffect } from "react";
import ButtonsGroup from "./ButtonsGroup";
import NotesToggle from "./NotesToggle";
import { useDispatch } from "react-redux";
import { setDoneNotesCount } from "../../Redux/NotesSlice";



const NotesCard = ({ myNotes, myNoteId, index, noteTitle, noteText, updatingInInput, deleteNote }) => {

    const dispatch = useDispatch();
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        // Load isDone state from localStorage on component mount
        const storedIsDone = localStorage.getItem(`note_${myNoteId}_isDone`);
        if (storedIsDone !== null) {
            setIsDone(JSON.parse(storedIsDone));
        }
    }, [myNoteId]);

    const handleToggleNote = () => {
        const newIsDone = !isDone;
        setIsDone(newIsDone);

        // Update localStorage with the new isDone value
        localStorage.setItem(`note_${myNoteId}_isDone`, JSON.stringify(newIsDone));

        // Dispatch setDoneNotesCount with the updated count
        dispatch(setDoneNotesCount(handleDoneNotesCount()));
    };
    

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

    return (
        <div className="card mb-3">
            <div 
            className={ `card-header bg-success-subtle ${ isDone ? "bg-warning-subtle" : "" } ` } 
            onClick={ handleToggleNote }
            title="click me to set done"
            >
                <NotesToggle handleToggleNote = { handleToggleNote } isDone = { isDone } />
            </div>
            <div className="card-body">
                <h5 className={ `card-title ${ isDone ? "done" : "" }` }>
                    <span className="me-2">{ index }.</span>
                    { noteTitle }
                </h5>
                <p className={ `card-text border-bottom pb-2 ${ isDone ? "done" : "" }`}>
                    { noteText }
                </p>
                <ButtonsGroup 
                    updatingInInput = { updatingInInput }
                    deleteNote = { deleteNote } 
                    isDone = { isDone }
                />
            </div>
        </div>
    )
};

export default NotesCard;



