import { useState } from "react";
import ButtonsGroup from "./ButtonsGroup";
import NotesToggle from "./NotesToggle";



const NotesCard = ({ noteTitle, noteText, updatingInInput, deleteNote }) => {

    const [isDone, setIsDone] = useState(false)

    const handleToggleNote = () => {
        setIsDone(!isDone)
    };

    // bg-danger-subtle

    return (
        <div className="card mb-3">
            <div className={ `card-header bg-success-subtle ${ isDone ? "bg-warning-subtle" : "" } ` }>
                <NotesToggle handleToggleNote = { handleToggleNote } isDone = { isDone } />
            </div>
            <div className="card-body">
                <h5 className={ `card-title ${ isDone ? "done" : "" }` }>
                    <span className="me-2">1</span>
                    { noteTitle }
                </h5>
                <p className={ `card-text border-bottom pb-2 ${ isDone ? "done" : "" }`}>
                    { noteText }
                </p>
                <ButtonsGroup updatingInInput = { updatingInInput } deleteNote = { deleteNote } isDone = { isDone } />
            </div>
        </div>
    )
};

export default NotesCard;