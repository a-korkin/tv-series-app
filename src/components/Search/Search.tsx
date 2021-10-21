import React, { useState } from "react";

interface SearchProps {
    searchHandler: (search_term: string) => void;
}

const Search: React.FC<SearchProps> = ({searchHandler}) => {
    const [term, setTerm] = useState<string>("");

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (term) {
                searchHandler(term);
            }
            setTerm("");
        }
    }

    return (
        <input 
            className="search" 
            type="text" 
            name="search" 
            id="search"
            placeholder="Search..."
            value={term}
            onChange={e => setTerm(e.target.value)}
            onKeyDown={keyDownHandler}
        />
    );
}

export default Search;
