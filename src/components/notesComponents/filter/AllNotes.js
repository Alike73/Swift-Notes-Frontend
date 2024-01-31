import { useState } from "react";
import FilteredNote from "./FilteredNote";


const AllNotes = () => {

    const [categories] = useState([
        'ALL',
        'FAMILY', 
        'HOME',
        'JOB', 
        'GROCERY',
        'DOG',
        'CAR',
        'OTHER' 
    ]);

    return (
        <div className="dropdown">
            <button 
                className="btn btn-sm dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                title="choose your category"
            >
                CATEGORY
            </button>
            <ul className="dropdown-menu">
                {categories.map((category, index) => <FilteredNote 
                    category = { category }
                    key = { index }
                />)}
            </ul>
        </div>
    )
};

export default AllNotes;