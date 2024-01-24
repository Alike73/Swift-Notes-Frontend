import HeroContentImage from "../../components/heroComponents/HeroContentImage";
import HeroContentText from "../../components/heroComponents/HeroContentText";


const Hero = () => {

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <HeroContentImage />
                <HeroContentText />
            </div>
        </div>
    )
};

export default Hero;