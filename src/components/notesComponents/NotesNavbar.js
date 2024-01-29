import { useSelector } from 'react-redux';
import { getDoneNotesCount } from "../../Redux/NotesSlice";


const NotesNavbar = ({ myNotes }) => {

    const doneNotesCount = useSelector(getDoneNotesCount);
    const totalNotes = myNotes.length;
    const inProgress = totalNotes - doneNotesCount;

    return (
        <nav className="navbar navbar-expand w-100">
            <div className="container-fluid">
                <div className="d-flex flex-column">
                    <div>
                        <i className="bi bi-arrow-repeat text-warning me-2" />
                        <span className="text-light">In progress:</span>
                        <span className='ms-2 text-warning fw-bold'>{ inProgress }</span>
                    </div>
                    <div>
                        <i className="bi bi-check2-circle text-danger me-2" />
                        <span className="text-light">Completed:</span>
                        <span className="ms-2 text-danger fw-bold">{ doneNotesCount }</span>
                    </div>
                    <div>
                        <i className="bi bi-card-checklist text-light me-2" />
                        <span className="text-light">Total notes:</span>
                        <span className='ms-2 text-light fw-bold'>{ totalNotes }</span>
                    </div>
                </div>

                <div className="btn-group mx-auto">
                    <button 
                    type="button" 
                    className="btn btn-sm btn-outline-secondary dropdown-toggle" 
                    data-bs-toggle="dropdown" 
                    data-bs-display="static"
                    aria-expanded="false"
                    title="filter by category"
                    >
                        CATEGORY
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