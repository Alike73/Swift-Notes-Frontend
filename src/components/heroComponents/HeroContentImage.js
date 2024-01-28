import hero_illustration_img from '../../assets/images/notes-illustration.svg';
import HeroContentNoteCount from './HeroContentNoteCount';

const HeroContentImage = ({ myNotes }) => {


    return (
        <div className="col-10 col-sm-8 col-lg-6">
            <div className="hero_img_wrapper">
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