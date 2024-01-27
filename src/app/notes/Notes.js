import NotesCard from "../../components/notesComponents/NotesCard";
import NotesNavbar from "../../components/notesComponents/NotesNavbar";
import SearchInput from "../../components/notesComponents/SearchInput";


const Notes = () => {
    

    return (
        <div className="modal fade" id="notes" tabIndex="-1" aria-labelledby="notesLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header px-3 py-1">
                        <NotesNavbar />
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <i className="bi bi-x-square fs-1" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body">
                        <div className="container">
                        <div className="d-flex justify-content-center mb-3">
                            <SearchInput />
                        </div>
                            <NotesCard />
                            <NotesCard />
                            <NotesCard />
                            <NotesCard />
                            <NotesCard />
                            <NotesCard />
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default Notes;