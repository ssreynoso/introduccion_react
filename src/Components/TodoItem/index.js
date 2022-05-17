import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon        } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {

    const eventHandler = function (event, option) {
        event.stopPropagation();
        switch (option) {
            case 'delete': props.on_delete(); break;
            case 'toggle': props.on_toggle(); break;
            default: break;
        }
    }

    return (
        <li 
            className={ `TodoItem ${ props.completed && "TodoItem--active"}` }
            onClick   = { (e) => eventHandler(e, "toggle") }
        >
            <span
                className = "TodoItem__checkbox"
            >
                <FontAwesomeIcon icon={ faSquareCheck }></FontAwesomeIcon>
            </span>

            <p>{props.text}</p>

            <span
                className = "TodoItem__delete"
                onClick   = { (e) => eventHandler(e, "delete") }
            >
                <FontAwesomeIcon icon={ faXmark }></FontAwesomeIcon>
            </span>
        </li>
    );
}

export { TodoItem };