import ButtonsGroup from "./ButtonsGroup";



const NotesCard = () => {

    return (
        <div className="card mb-3">
            <div className="card-header">
            <span className="me-2">
                <i className="bi bi-check-circle" />
                <i className="bi bi-arrow-repeat" />
            </span>
                completed / in progress
            </div>
            <div className="card-body">
                <h5 className="card-title">
                <span className="me-2">1</span>
                Special title treatment
                </h5>
                <p className="card-text border-bottom pb-2">
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                </p>
                <ButtonsGroup />
            </div>
        </div>
    )
};

export default NotesCard;