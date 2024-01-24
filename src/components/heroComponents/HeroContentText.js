import HeroContentButtons from "./HeroContentButtons";



const HeroContentText = () => {
    
    return (
        <div className="col-lg-6">
            <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-3">
                Swift Notes
            </h1>
            <p className="lead">
                Quickly design and customize responsive mobile-first sites with Bootstrap, 
                the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, 
                responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <HeroContentButtons />
        </div>
    )
};

export default HeroContentText;