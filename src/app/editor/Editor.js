import EditorForm from "../../components/editorComponents/EditorForm";


const Editor = ({ handleSubmit, title, setTitle, text, setText, category, setCategory, editing }) => {

    const titleText = editing ? "Edit Your Note" : "Create Your Note";

    return (
        <div className="modal fade" id="editor" tabIndex="-1" aria-labelledby="editorLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-3" id="editorLabel">{ titleText }</h2>
                        <i className="bi bi-x-square fs-1" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body editor_body px-2">
                        <EditorForm 
                        handleSubmit = { handleSubmit } 
                        title = { title } 
                        setTitle = { setTitle } 
                        text = { text } 
                        setText = { setText }
                        category = { category }
                        setCategory = { setCategory }
                        editing = { editing }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Editor;