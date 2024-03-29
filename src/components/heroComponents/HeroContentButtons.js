

const HeroContentButtons = ({ setEditing, setTitle, setText, setCategory }) => {

    const handleCreateNote = () => {
        setEditing(false)
        setTitle("")
        setText("")
        setCategory("")
    };


    return (
        <div className="d-grid gap-3 d-md-flex justify-content-md-start mt-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 hero_btn" data-bs-toggle="modal" data-bs-target="#notes">
                <i className="bi bi-card-checklist fs-1 me-2" />
                Show Notes
            </button>
            <button 
            type="button" 
            className="btn btn-outline-secondary btn-lg px-4 hero_btn" 
            data-bs-toggle="modal" 
            data-bs-target="#editor"
            onClick={ handleCreateNote }
            >
                <i className="bi bi-pencil-square fs-1 me-2" />
                Create Note
            </button>
        </div>
    )
};

export default HeroContentButtons;