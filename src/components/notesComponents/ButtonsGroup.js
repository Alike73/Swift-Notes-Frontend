import Swal from 'sweetalert2';

const ButtonsGroup = ({ updatingInInput, deleteNote, isDone, createdAt }) => {

    const formattedDate = new Date(createdAt).toLocaleDateString();
    const formattedTime = new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            deleteNote();
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1700
            });
        }
        });
    }

    return (
        <div className="d-flex justify-content-between align-items-center note-card-footer">
        <div className="d-flex flex-column note-date-and-time">
            <small className="card_date">Created: { formattedDate } at { formattedTime }</small>
        </div>
            <div className="btn_wrapper">
                <button
                    title='Edit note' 
                    type="button" 
                    className="btn btn-sm btn-outline-success me-3 edit-btn" 
                    data-bs-toggle="modal" 
                    data-bs-target="#editor"
                    disabled={ isDone }
                    onClick={ updatingInInput }
                >
                    <i className="bi bi-pencil-square" />
                </button>
                <button
                    title='Delete note'
                    type="button" 
                    className="btn btn-sm btn-outline-danger delete-btn" 
                    onClick = { handleDelete }
                >
                    <i className="bi bi-trash3" />
                </button>
            </div>
        </div>
    )
};

export default ButtonsGroup;