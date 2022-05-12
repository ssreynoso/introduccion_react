import React from "react";
import './index.css';

function TodoSearch({ searchValue, setSearchValue }) {
    
    const search_value = function(event) {
        setSearchValue(event.target.value.toString());
    }

    return (
        <input 
            className   = "TodoSearch"
            placeholder = "Busque un elemento"
            value       = { searchValue }
            onChange    = { search_value }
        />
    );
}

export { TodoSearch };