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

    newTodos[index].completed = !(newTodos[index].completed);

    saveTodos(newTodos);
}

const deleteTodo = function (text, todos, saveTodos) {
    const index    = findTodoIndex(text, todos);
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    saveTodos(newTodos);
}

const addTodo = function (text, todos, saveTodos) {
    const newTodo   = createTodo(text);
    const newTodos  = [...todos];

    const controles = chkTodo(text, todos);
    const errores   = controles
                        .filter( el => el.flag === true )
                        .map   ( el => el.msg );

    if (errores.length !== 0) return false;

    newTodos.push(newTodo);
        
    saveTodos(newTodos);

    return true;
}

const createTodo = function (text) {
    return {
        text     : text,
        completed: false
    }
}

const chkTodo = function (text, todos) {
    const controles = [];

    controles.push(chkExistingTodo(text, todos));

    return controles;    
}

const chkExistingTodo = function (text, todos) {
    return errorObject(
        todos.some( element => (element.text === text) ), 
        "Ya existe un To Do con este texto"
    );
}

const errorObject = function (flag, msg) {
    return {
        flag,
        msg
    }
}

export { deleteTodo, toggleTodo, filterTodos, addTodo, chkTodo };