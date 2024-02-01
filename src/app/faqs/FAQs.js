import FAQsAccordion from "../../components/faqsComponents/FAQsAccordion";


const FAQs = () => {

    return (
        <div className="modal fade" id="faqs" tabIndex="-1" aria-labelledby="faqsLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-5" id="faqsLabel">Frequently asked questions</h2>
                        <i className="bi bi-x-square fs-1" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body">
                        <FAQsAccordion />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FAQs;