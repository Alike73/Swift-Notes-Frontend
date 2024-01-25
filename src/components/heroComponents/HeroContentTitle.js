import swift_logo from '../../assets/images/swift-color.svg'

const HeroContentTitle = () => {

    return (
        <div className="hero_content_title_wrapper">
            <h1 className="title display-1 fw-bold text-body-emphasis lh-1 mb-3 mt-0">
                Swift Notes
                <img className="d-block me-lg-auto img-fluid swift_logo" src={ swift_logo } alt="swift logo" />
            </h1>
        </div>
    )
};

export default HeroContentTitle;