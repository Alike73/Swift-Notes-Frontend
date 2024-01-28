import arrow_img from '../../assets/images/1arrow.svg';

const HeroContentNoteCount = ({ myNotes }) => {

    return (
        <div className="notes_count_box" title="view notes" data-bs-toggle="modal" data-bs-target="#notes">
            <span title="total notes in your list">
                { myNotes.length }
            </span>
            <span>
                Notes
            </span>
            <img className="just_arrow" src={ arrow_img } alt="arrow" />
        </div>
    )
};

export default HeroContentNoteCount;