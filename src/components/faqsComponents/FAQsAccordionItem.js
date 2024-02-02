

const FAQsAccordionItem = ({ 
    btn_class, data_bs_target, aria_expanded, 
    aria_controls, title, panelsId, panels_class, text}) => {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                    className={ btn_class } 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={ data_bs_target } 
                    aria-expanded={ aria_expanded } 
                    aria-controls={ aria_controls }
                >
                    { title }
                </button>
            </h2>
            <div id={ panelsId } className={ panels_class }>
                <div className="accordion-body">
                    <p className="accordion_text">
                        { text }
                    </p>
                </div>
            </div>
        </div>
    )
};

export default FAQsAccordionItem;