import React                                   from "react";
import Constants                               from "../Constants";
import { useLocalStorage }                     from "../CustomHooks/useLocalStorage";
import { deleteTodo, toggleTodo, addTodo, filterTodos } from "../Primitives";

// Creo un contexto que se va a compartir por toda la app
const TodoContext = React.createContext();

const TodoProvider = function(props) {

    // Creación de los estados con React Hooks -> React.useState();

    const [loading, setLoading] = React.useState(true);                  // Creo estado necesario
    const [error,   setError] = React.useState(null);                  // Creo estado necesario

    const { item: todos, saveItem: setTodos, } = useLocalStorage(Constants.TODOS, [], setLoading, setError);

    const [ searchValue, setSearchValue ] = React.useState("");

    const [ modal, setModal ] = React.useState(false);

    // Contadores
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos     = todos.length;

    // Filtros
    let filteredTodos    = filterTodos(searchValue, todos);

    return (
        <TodoContext.Provider value = {{
            loading,
            error,
            todos,
            completedTodos, 
            totalTodos,
            filteredTodos,
            setTodos,
            searchValue,
            setSearchValue,
            toggleTodo,
            deleteTodo,
            addTodo,
            modal,
            setModal
        }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };