import { useDispatch, useSelector } from "react-redux";
import { getSearchTerm, setSearchTerm } from "../../Redux/SearchSlice";


const SearchInput = () => {

    const searchTerm = useSelector(getSearchTerm);
    const dispatch = useDispatch();

    const handleSearchTerm = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    return (
        <div className="input-wrapper pt-3" title="search note by name">
            <button className="icon"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M22 22L20 20"></path>
                </svg>
            </button>
            <input 
                placeholder="search note by name..." 
                className="input" 
                name="text" 
                type="text" 
                value={searchTerm}
                onChange={handleSearchTerm}
            />
        </div>
    )
};

export default SearchInput;