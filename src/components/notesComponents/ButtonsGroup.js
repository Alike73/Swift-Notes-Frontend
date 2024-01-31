import Swal from 'sweetalert2';

const ButtonsGroup = ({ updatingInInput, deleteNote, isDone }) => {

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
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
            <small className="card_date">Created: 01/28/2024</small>
        </div>
            <div className="btn_wrapper">
                <button
                    title='Edit note' 
                    type="button" 
                    className="btn btn-sm btn-outline-success me-3" 
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
                    className="btn btn-sm btn-outline-danger" 
                    onClick = { handleDelete }
                >
                    <i className="bi bi-trash3" />
                </button>
            </div>
        </div>
    )
};

export default ButtonsGroup;