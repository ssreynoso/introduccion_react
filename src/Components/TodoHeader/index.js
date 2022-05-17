import React from "react";
import './TodoHeader.css';
import { TodoContext } from "../../Context";

function TodoHeader() {

    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return (
        <>
            <h1 className="TodoTitle"><span className="TodoTitle--colorized">To Do</span> list</h1>
            <h2 className="TodoCounter">Has completado {completedTodos.toString()} de {totalTodos.toString()} TODOs</h2>
        </>
    );
}

export { TodoHeader };