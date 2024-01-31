
import axios from 'axios';

const myURL = 'http://localhost:4000';

// GET:
const getAllNotes = (setMyNotes) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
    setMyNotes(data)
    })
}

// POST:
const addNote = (title, setTitle, text, setText, category, setCategory, setMyNotes) => {
    const createdAt = new Date();
    axios.post(`${myURL}/saveNote`, { title, text, category, createdAt })
    .then((data) => {
        console.log(data)
        setTitle("")
        setText("")
        setCategory("")
        getAllNotes(setMyNotes)
    })
};

// PUT:
const editNote = (noteId, title, setTitle, text, setText, category, setCategory, setMyNotes, setEditing) => {
    axios.post(`${myURL}/editNote`, { _id: noteId, title, text, category })
    .then((data) => {
        console.log(data)
        setTitle("")
        setText("")
        setCategory("")
        setEditing(false)
        getAllNotes(setMyNotes)
    })
};

const deleteNote = (_id, setMyNotes) => {
    axios.post(`${myURL}/deleteNote`, { _id })
    .then((data) => {
        console.log(data)
        getAllNotes(setMyNotes)
    })
};;

export { getAllNotes, addNote, editNote, deleteNote };