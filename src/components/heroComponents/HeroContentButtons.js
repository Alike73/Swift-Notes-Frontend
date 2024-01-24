

const HeroContentButtons = () => {


    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Show Notes
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Create Note
            </button>
        </div>
    )
};

export default HeroContentButtons;