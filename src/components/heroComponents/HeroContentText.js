import HeroContentButtons from "./HeroContentButtons";

const HeroContentText = ({ setEditing, setTitle, setText, setCategory }) => {
    
    return (
        <div className="col-lg-6">
            <p className="hero_text">
                Empower Your Productivity with Create Your Swift Notes: An app for effortless note management. 
                Seamlessly create, update, and delete your notes with intuitive user-friendly interface.
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