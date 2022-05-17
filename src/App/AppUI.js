import "./App.css";
import React from "react";
import { TodoContext      } from "../Context";
import { Modal            } from "../Components/Modal";
import { TodoForm         } from "../Components/TodoForm";
import { TodoHeader       } from "../Components/TodoHeader";
import { TodoSearch       } from "../Components/TodoSearch";
import { TodoList         } from "../Components/TodoList";
import { TodoItem         } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";

function AppUI() {

    const { error,
            loading,
            todos,
            filteredTodos,
            setTodos,
            toggleTodo,
            deleteTodo,
            modal
        } = React.useContext(TodoContext);

    return (
        // <> </> Es lo mismo que usar <React.Fragment>. Usamos esto porque el componente solamente debe retornar un solo elemento.
        <div className="App">
            <TodoHeader/>

            <TodoSearch/>

            <TodoList>
                { error     && <p>Hubo un error</p> }
                { loading   && <p>Estamos cargando</p> }
                { (!loading && !filteredTodos.length && !error) && <p>Crea tu primer todo</p> }

                { filteredTodos.map( todo => ( //Los paréntesis son para retornar un solo elemento
                    // Warning: Each child in a list should have a unique "key" prop.
                    <TodoItem 
                        key       = { todo.text }
                        text      = { todo.text }
                        completed = { todo.completed }
                        on_toggle = { () => toggleTodo(todo.text, todos, setTodos) }
                        on_delete = { () => deleteTodo(todo.text, todos, setTodos) }
                    />
                ))}
            </TodoList>
    
            <CreateTodoButton text="+"/>

            { 
                modal && 
                <Modal>
                    <TodoForm/>
                </Modal>
            }
        </div>
    );    
}

export { AppUI };