import NotesCard from "../../components/notesComponents/NotesCard";


const Notes = () => {
    

    return (
        <div className="modal fade" id="notes" tabIndex="-1" aria-labelledby="notesLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header px-3 py-1">
                        <div>
                            <h3 className="modal-title fs-5" id="notesLabel">
                                <i className="bi bi-arrow-repeat me-2" />
                                In progress: 15
                            </h3>
                            <h3 className="modal-title fs-5" id="notesLabel">
                                <i className="bi bi-check-circle me-2" />
                                Done: 7
                            </h3>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
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