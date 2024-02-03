import dataSelect from '../../data/SelectData';

const EditorForm = ({ handleSubmit, title, setTitle, text, setText, category, setCategory, editing }) => {
    
    const btnText = editing ? "Save Your changes" : "Add New Note";

    const showWarning = !title.trim() || !text.trim();

    return (
        <form className="myForm" onSubmit = { handleSubmit }>
            <div className="mb-3">
                <label htmlFor="note-title" className="col-form-label">Title:</label>
                <textarea 
                    className="form-control myFormTextarea" 
                    id="note-title" 
                    value = { title }
                    onChange = { (e) => setTitle(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="note-text" className="col-form-label">Note:</label>
                <textarea 
                    className="form-control myFormTextarea" 
                    id="note-text"
                    rows={5} 
                    value = { text }
                    onChange = { (e) => setText(e.target.value) }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="note-category" className="col-form-label">Category:</label>
                <select
                    id="note-category" 
                    className="form-select" 
                    aria-label="Default select example"
                    onChange = { (e) => setCategory(e.target.value) }
                >
                    {dataSelect.map((item) => (
                        <option key={item.id} value={item.option_value}>
                            {item.option_value}
                        </option>
                    ))}
                </select>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary mt-3 form_btn" 
                data-bs-toggle="modal" 
                data-bs-target="#notes"
                disabled = { !title || !text || !category }
            >
                { btnText }
            </button>
            <div className='mt-3 form_warning_text_wrapper'>
                {showWarning && (
                    <span>
                        <i className="bi bi-asterisk me-1" />
                        <small className='text-secondary'>
                            To be able to save the note, please fill in all fields
                        </small>
                        <i className="bi bi-exclamation-lg text-secondary" />
                    </span>
                )}
            </div>
        </form>
    )
};

export default EditorForm;