import { useSelector } from 'react-redux';
import { getDoneNotesCount } from "../../Redux/NotesSlice";
import AllNotes from './filter/AllNotes';


const NotesNavbar = ({ myNotes }) => {

    const doneNotesCount = useSelector(getDoneNotesCount);
    const totalNotes = myNotes.length;
    const inProgress = totalNotes - doneNotesCount;

    return (
        <nav className="navbar navbar-expand w-100">
            <div className="container-fluid">
                <div className="d-flex flex-wrap">
                    <div className='me-4'>
                        <i className="bi bi-arrow-repeat text-info me-2" />
                        <span className="text-light">In progress:</span>
                        <span className='ms-2 text-info fw-bold fs-5'>{ inProgress }</span>
                    </div>
                    <div className='me-4'>
                        <i className="bi bi-check2-circle text-danger me-2" />
                        <span className="text-light">Completed:</span>
                        <span className="ms-2 text-danger fw-bold fs-5">{ doneNotesCount }</span>
                    </div>
                    <div className='me-4'>
                        <i className="bi bi-card-checklist text-light me-2" />
                        <span className="text-light">Total notes:</span>
                        <span className='ms-2 text-light fw-bold fs-5'>{ totalNotes }</span>
                    </div>
                    <div className="me-4">
                        <AllNotes />
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NotesNavbar;