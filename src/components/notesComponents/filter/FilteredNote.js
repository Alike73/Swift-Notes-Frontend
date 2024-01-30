import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../../Redux/NotesSlice";


const FilteredNote = ({ category }) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    const handleFilterCategory = () => {
        dispatch(filterCategory(category))
    };

    return (
        <li>
            <button 
            className={ selectedCategory === category ? "dropdown-item active" : "dropdown-item"} 
            type="button" 
            onClick = { handleFilterCategory }>
                { category }
            </button>
        </li>
    )
};

export default FilteredNote;