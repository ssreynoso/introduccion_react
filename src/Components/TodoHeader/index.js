import React from "react";
import './index.css';

function TodoHeader({ completedTodos, totalTodos }) {
    return (
        <>
            <h1 className="TodoTitle"><span className="TodoTitle--colorized">To Do</span> list</h1>
            <h2 className="TodoCounter">Has completado {completedTodos.toString()} de {totalTodos.toString()} TODOs</h2>
        </>
    );
}

export { TodoHeader };