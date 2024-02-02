import FAQsAccordion from "../../components/faqsComponents/FAQsAccordion";


const FAQs = () => {

    return (
        <div className="modal fade" id="faqs" tabIndex="-1" aria-labelledby="faqsLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-3" id="faqsLabel">Frequently asked questions</h2>
                        <i className="bi bi-x-square fs-1" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body faqs_body">
                        <FAQsAccordion />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FAQs;