import dataSelect from '../../data/SelectData';

const EditorForm = ({ handleSubmit, title, setTitle, text, setText, category, setCategory, editing }) => {
    
    const btnText = editing ? "Save Your changes" : "Add New Note";

    console.log(category)

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
                disabled = { !title || !text }
            >
                { btnText }
            </button>
        </form>
    )
};

export default EditorForm;