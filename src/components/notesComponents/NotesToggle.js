

const NotesToggle = ({ handleToggleNote, isDone }) => {

    return (
        <button 
            className="btn d-inline-flex align-items-center note_toggler_btn" 
            type="button" 
            onClick={ handleToggleNote }
        >
            { isDone 
                ? (<i className="bi bi-check2-square me-2 fs-5 text-warning" />) 
                : (<i className="bi bi-arrow-repeat me-2 fs-5 text-info" />)
            }
                
            { isDone 
                ? (<span className="text-warning">done</span>) 
                : (<span className="text-info">in progress</span>) 
            }
            
        </button>
    )
};

export default NotesToggle;