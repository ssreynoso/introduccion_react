import React                                   from "react";
import Constants                               from "./Constants";
import { AppUI }                               from "./AppUI";
import { deleteTodo, toggleTodo, filterTodos } from "./Primitives";
import { useLocalStorage }                     from "./CustomHooks/useLocalStorage";

function App() {
    
    // Creación de los estados con React Hooks -> React.useState();

    const [todos,       setTodos]       = useLocalStorage(Constants.TODOS, []);
    const [searchValue, setSearchValue] = React.useState("");
    
    // Contadores
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos     = todos.length;

    // Filtros
    let filteredTodos = filterTodos(searchValue, todos);

    return (
        <AppUI
            completedTodos = { completedTodos }
            totalTodos     = { totalTodos }
            setTodos       = { setTodos }
            searchValue    = { searchValue }
            setSearchValue = { setSearchValue }
            filteredTodos  = { filteredTodos }
            toggleTodo     = { toggleTodo }
            deleteTodo     = { deleteTodo }
        />
    );
}

export default App;
