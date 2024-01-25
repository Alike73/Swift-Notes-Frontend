import swift_logo from '../../assets/images/swift-color.svg'

const HeroContentTitle = () => {

    return (
        <div className="hero_content_title_wrapper">
            <img className="swift_logo" src={ swift_logo } alt="swift logo" />
            <h1 className="title display-1 fw-bold lh-1 mb-3 mt-0">
                <span className="gradient-text me-3">Create Your Swift</span> Notes
            </h1>
        </div>
    )
};

export default HeroContentTitle;