


const EditorForm = ({ handleSubmit, title, setTitle, text, setText, category, setCategory, editing }) => {
    
    const btnText = editing ? "Save Your changes" : "Add New Note";

    return (
        <form onSubmit = { handleSubmit }>
            <div className="mb-3">
                <label htmlFor="note-title" className="col-form-label">Title:</label>
                <textarea 
                    className="form-control" 
                    id="note-title" 
                    value = { title }
                    onChange = { (e) => setTitle(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="note-text" className="col-form-label">Note:</label>
                <textarea 
                    className="form-control" 
                    id="note-text" 
                    value = { text }
                    onChange = { (e) => setText(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="col-form-label">Category:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="category"
                    value = { category }
                    onChange = { (e) => setCategory(e.target.value.toUpperCase()) } 
                />
            </div>
            <button 
            type="submit" 
            className="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#notes"
            disabled = { !title || !text || !category }
            >
                { btnText }
            </button>
        </form>
    )
};

export default EditorForm;