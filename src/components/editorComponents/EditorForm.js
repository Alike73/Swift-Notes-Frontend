


const EditorForm = ({ handleSubmit, title, setTitle, text, setText, editing }) => {
    
    const btnText = editing ? "Save Note" : "Add New Note";

    return (
        <form onSubmit = { handleSubmit }>
            <div className="mb-3">
                <label htmlFor="note-title" className="col-form-label">Title:</label>
                <textarea 
                    className="form-control" 
                    id="note-title" 
                    value = { title }
                    required={true}
                    onChange = { (e) => setTitle(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="note-text" className="col-form-label">Title:</label>
                <textarea 
                    className="form-control" 
                    id="note-text" 
                    value = { text }
                    required={true}
                    onChange = { (e) => setText(e.target.value) }
                />
            </div>
            <button 
            type="submit" 
            className="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#notes"
            disabled = { !title || !text }
            >
                { btnText }
            </button>
        </form>
    )
};

export default EditorForm;