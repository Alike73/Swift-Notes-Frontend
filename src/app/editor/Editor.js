import EditorForm from "../../components/editorComponents/EditorForm";


const Editor = ({ handleSubmit, title, setTitle, text, setText, editing }) => {

    return (
        <div className="modal fade" id="editor" tabIndex="-1" aria-labelledby="editorLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editorLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <EditorForm 
                        handleSubmit = { handleSubmit } 
                        title = { title } 
                        setTitle = { setTitle } 
                        text = { text } 
                        setText = { setText }
                        editing = { editing }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Editor;