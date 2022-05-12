import "./index.css";
import React from "react";
import { TodoHeader       } from "../Components/TodoHeader";
import { TodoSearch       } from "../Components/TodoSearch";
import { TodoList         } from "../Components/TodoList";
import { TodoItem         } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";

function AppUI({
    completedTodos,
    totalTodos,
    setTodos,
    searchValue,
    setSearchValue,
    filteredTodos,
    toggleTodo,
    deleteTodo,
}) {
    return (
        // <> </> Es lo mismo que usar <React.Fragment>. Usamos esto porque el componente solamente debe retornar un solo elemento.
        <div className="App">
            <p> asdasdsasa </p>
            <TodoHeader
                completedTodos = { completedTodos }
                totalTodos     = { totalTodos }
            />

            <TodoSearch 
                searchValue    = { searchValue }
                setSearchValue = { setSearchValue }
            />

            <TodoList>
                { filteredTodos.map(todo => ( //Los paréntesis son para retornar un solo elemento
                    // Warning: Each child in a list should have a unique "key" prop.
                    <TodoItem 
                        key       = { todo.text }
                        text      = { todo.text }
                        completed = { todo.completed }
                        on_toggle = { () => toggleTodo(todo.text, filteredTodos, setTodos) }
                        on_delete = { () => deleteTodo(todo.text, filteredTodos, setTodos) }
                    />
                ))}
            </TodoList>

            <CreateTodoButton text="+"/>
        </div>
    );    
}

export { AppUI };