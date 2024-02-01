import hero_illustration_img from '../../assets/images/notes-illustration.svg';
import HeroContentNoteCount from './HeroContentNoteCount';

const HeroContentImage = ({ myNotes }) => {

    const faqsValue = 'Click to learn more';

    return (
        <div className="col-10 col-sm-8 col-lg-6">
            <div className="hero_img_wrapper">
            <button 
                className="btn btn-outline-secondary d-inline-flex align-items-center faqs_open_btn hero_btn" 
                type="button"
                data-bs-toggle="modal" 
                data-bs-target="#faqs"
                title={faqsValue.toString()}
            >
                FAQs
                <i className="bi bi-question-lg" />
            </button>
                <HeroContentNoteCount myNotes = { myNotes } />
                <img 
                    src={ hero_illustration_img } 
                    className="d-block mx-lg-auto img-fluid" 
                    alt="Bootstrap Themes" 
                    width="700" 
                    loading="lazy" 
                />
            </div>
        </div>
    )
};

export default HeroContentImage;