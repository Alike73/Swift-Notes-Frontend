import HeroContentImage from "../../components/heroComponents/HeroContentImage";
import HeroContentText from "../../components/heroComponents/HeroContentText";
import HeroContentTitle from "../../components/heroComponents/HeroContentTitle";


const Hero = ({ myNotes }) => {

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5">
                <HeroContentTitle />
                <HeroContentImage myNotes = { myNotes } />
                <HeroContentText />
            </div>
        </div>
    )
};

export default Hero;