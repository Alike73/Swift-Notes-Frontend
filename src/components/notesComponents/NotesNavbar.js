

const NotesNavbar = ({ myNotes }) => {

    return (
        <nav className="navbar navbar-expand w-100">
            <div className="container-fluid">
                <div>
                    <p className="modal-title text-light lead" id="notesLabel_1">
                        <i className="bi bi-arrow-repeat me-2" />
                        In progress: 15
                    </p>
                    <p className="modal-title text-light lead" id="notesLabel_2">
                        <i className="bi bi-check-circle me-2" />
                        Done: 7
                    </p>
                </div>

                <div className="btn-group mx-auto">
                    <button 
                    type="button" 
                    className="btn btn-outline-secondary dropdown-toggle" 
                    data-bs-toggle="dropdown" 
                    data-bs-display="static"
                    aria-expanded="false"
                    title="choose your category"
                    >
                        Category
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li><button className="dropdown-item active my-2" type="button">All</button></li>
                        <li><button className="dropdown-item my-2" type="button">Category-1</button></li>
                        <li><button className="dropdown-item my-2" type="button">Category-2</button></li>
                        <li><button className="dropdown-item my-2" type="button">Category-3</button></li>
                        <li><button className="dropdown-item my-2" type="button">Category-4</button></li>
                        <li><button className="dropdown-item my-2" type="button">Category-5</button></li>
                        <li><button className="dropdown-item my-2" type="button">Category-6</button></li>
                        <li><button className="dropdown-item my-2" type="button">Category-7</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NotesNavbar;