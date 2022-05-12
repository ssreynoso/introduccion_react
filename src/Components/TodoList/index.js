import React from "react";
import './index.css';

function TodoList(props) {
    return (
        <ul className="TodoList">
            {props.children}
        </ul>
    );
}

export { TodoList };