import Swal from 'sweetalert2';

const ButtonsGroup = () => {

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
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
        }
        });
    }

    return (
        <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Date: 1/24/2024</small>
            <div className="btn_wrapper">
                <button 
                    type="button" 
                    className="btn btn-sm btn-outline-secondary me-2" 
                    data-bs-toggle="modal" 
                    data-bs-target="#editor"
                >
                    <i className="bi bi-pencil-square" />
                </button>
                <button 
                    type="button" 
                    className="btn btn-sm btn-outline-secondary" 
                    onClick = { handleDelete }
                >
                    <i className="bi bi-trash3" />
                </button>
            </div>
        </div>
    )
};

export default ButtonsGroup;