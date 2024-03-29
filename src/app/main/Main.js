import { useEffect, useState } from 'react';
import { addNote, editNote, getAllNotes } from '../../api/FetchNotes';
import Swal from 'sweetalert2';
import Editor from "../editor/Editor";
import Hero from "../hero/Hero";
import Notes from "../notes/Notes";
import FAQs from '../faqs/FAQs';



const Main = () => {

    const [myNotes, setMyNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [noteId, setNoteId] = useState("");
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        getAllNotes(setMyNotes);
    }, []);

    const updatingInInput = (_id, title, text, category) => {
        setNoteId(_id)
        setTitle(title)
        setText(text)
        setCategory(category)
        setEditing(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                if(editing) {
                    editNote(noteId, title, setTitle, text, setText, category, setCategory, setMyNotes, setEditing)
                }
                else {
                    addNote(title, setTitle, text, setText, category, setCategory, setMyNotes)
                }
                Swal.fire({
                    icon: "success",
                    title: "Saved!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };

    return (
        <div className="main">
            <FAQs />
            <Notes 
                myNotes = { myNotes } 
                setMyNotes = { setMyNotes } 
                updatingInInput = { updatingInInput } 
            />
            <Editor 
                handleSubmit = { handleSubmit } 
                title = { title } 
                setTitle = { setTitle } 
                text = { text } 
                setText = { setText }
                category = { category }
                setCategory = { setCategory }
                editing = { editing } 
            />
            <Hero 
                myNotes = { myNotes } 
                setEditing = { setEditing }
                setTitle = { setTitle } 
                setText = { setText }
                setCategory ={ setCategory }
            />
        </div>
    )
};

export default Main;