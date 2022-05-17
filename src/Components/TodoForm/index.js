import React, { useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../Context";
import { addTodo     } from "../../Primitives";

function TodoForm (props) {
    
    const [ value, setValue ] = React.useState("");

    const { todos, setTodos, setModal } = useContext(TodoContext);

    const on_cancel = function(event) {
        event.preventDefault();
        setModal(false);
    }

    const on_add = function(event) {
        event.preventDefault();
        
        if (addTodo(value, todos, setTodos)) {
            setModal(false);
        }
    }

    const on_change = function(event){
        let textarea_value = event.target.value;
        setValue(textarea_value);
    }

    const form = <form className="Form">
        <h2 className="Form-title">Nuevo <span className="Form-title--colorized">To Do</span></h2>

        <textarea 
            className   = "Form-textarea"
            placeholder = "Hacer tarea de..."
            value       = { value }
            onChange    = { on_change }
            autoFocus
            maxLength   = { 200 }
        />

        <div className="Form-buttonsContainer">
            <button
                onClick   = { on_cancel }
                className = "Form-button"
            >
                Cancelar
            </button>

            <button
                onClick   = { on_add }
                className = "Form-button"
            >
                Agregar
            </button>
        </div>
    </form>

    return (
        <>
            { form }
        </>
    );
}

export { TodoForm };