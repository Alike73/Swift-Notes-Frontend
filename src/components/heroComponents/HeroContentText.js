import HeroContentButtons from "./HeroContentButtons";

const HeroContentText = ({ setEditing, setTitle, setText, setCategory }) => {
    
    return (
        <div className="col-lg-6">
            <p className="hero_text">
                Quickly design and customize responsive mobile-first sites with Bootstrap, 
                the world’s most popular front-end open source toolkit.
            </p>
            <HeroContentButtons 
            setEditing = { setEditing } 
            setTitle = { setTitle }
            setText = { setText }
            setCategory = { setCategory }
            />
        </div>
    )
};

export default HeroContentText;