import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../../Context";

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
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