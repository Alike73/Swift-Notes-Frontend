import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../../Redux/NotesSlice";
import { setSearchTerm } from "../../../Redux/SearchSlice";


const FilteredNote = ({ category }) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    const handleFilterCategory = () => {
        dispatch(filterCategory(category))
        dispatch(setSearchTerm(''))
    };

    return (
        <li className="my-2">
            <button 
                className={ selectedCategory === category ? "dropdown-item active my-2" : "dropdown-item my-2"} 
                type="button" 
                onClick = { handleFilterCategory }>
                { category }
            </button>
        </li>
    )
};

export default FilteredNote;