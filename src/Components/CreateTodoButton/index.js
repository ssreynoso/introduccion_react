import React from "react";
import './CreateTodoButton.css'
import { TodoContext } from "../../Context";

function CreateTodoButton(props) {

    const { setModal } = React.useContext(TodoContext);

    // const create_item = function () {
    //     alert("Creación de un nuevo TODO");
    // }

    return (
        <button 
            className = "createTodoButton"
            onClick   = { () => setModal(true) }
        >
            {props.text}
        </button>
    );
}

export { CreateTodoButton };