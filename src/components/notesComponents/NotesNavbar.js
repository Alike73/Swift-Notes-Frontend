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
                        <i className="bi bi-check-circle text-info me-2" />
                        <span className="text-light">Total notes: { totalNotes }</span>
                    </div>
                    <div>
                        <span className="text-light">In progress: { inProgress }</span>
                    </div>
                    <div>
                        <span className="text-light">Completed: { doneNotesCount }</span>
                    </div>
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