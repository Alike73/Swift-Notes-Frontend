import Swal from 'sweetalert2';

const EditorForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire({
                icon: "success",
                title: "Saved!",
                showConfirmButton: false,
                timer: 1500
            });
            // setTimeout(() => {
            //     window.location.reload(true);
            // }, 1500);
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
        });
    }

    return (
        <form onSubmit = { handleSubmit }>
            <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name" />
            </div>
            <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#notes">
                Add note / Save changes
            </button>
        </form>
    )
};

export default EditorForm;