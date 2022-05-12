const findTodoIndex = function (text, todos) {
    return todos.findIndex( todo => todo.text === text );
}

const filterTodos = function (searchValue, todos) {
    let filteredTodos = [];

    if (searchValue.length > 0) {
        filteredTodos = todos.filter( todo => {
            const todoText   = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    } else {
        filteredTodos = todos;
    }

    return filteredTodos;
}

const toggleTodo = function (text, todos, saveTodos) {
    const index = findTodoIndex(text, todos);
    
    // const newTodos = todos; -> ¿Por qué esto no? Porque newTodos es el mismo array que todos. Copiamos direccion de memoria.
    const newTodos = [...todos]; // Esto sí porque copiamos cada elemento en un nuevo array.

    newTodos[index].completed = (newTodos[index].completed) ? false : true;

    saveTodos(newTodos);
}

const deleteTodo = function (text, todos, saveTodos) {
    const index    = findTodoIndex(text, todos);
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    saveTodos(newTodos);
}

export { deleteTodo, toggleTodo, filterTodos };