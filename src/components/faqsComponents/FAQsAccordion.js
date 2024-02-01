import FAQsAccordionItem from "./FAQsAccordionItem";
import faqsData from '../../data/FAQsData';

const FAQsAccordion = () => {

    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            { faqsData.map((item) => <FAQsAccordionItem 
                key = { item.id } 
                btn_class = { item.btn_class } 
                data_bs_target = { item.data_bs_target }
                aria_expanded = { item.aria_expanded }
                aria_controls = { item.aria_controls }
                title = { item.title }
                panelsId = { item.panelsId }
                panels_class = { item.panels_class }
                text = { item.text }
            />)}
        </div>
    )
};

export default FAQsAccordion;