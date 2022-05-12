import React from "react";
import './index.css'

function CreateTodoButton(props) {

    const create_item = function () {
        alert("Creación de un nuevo TODO");
    }

    return (
        <button 
            className = "createTodoButton"
            onClick   = { create_item }
        >
            {props.text}
        </button>
    );
}

export { CreateTodoButton };