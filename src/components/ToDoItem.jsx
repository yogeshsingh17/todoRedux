// Single ToDo item.
// This item will be used inside ToDoList to make a list of ToDo

import { useDispatch } from "react-redux";
import { removeTodoActionCreator, toggleTodoActionCreator } from "../redux/actions/todoActions";

function ToDoItem( {id, text, isCompleted} ){

    const dispatch = useDispatch();

    function removeTodo(){
        dispatch(removeTodoActionCreator(id));
    }

    function toggleTodo(){
        dispatch(toggleTodoActionCreator(id))
    }

    return (
        <>
            <div className="todo-item">
                <input type="checkbox" checked={isCompleted} onChange={toggleTodo} />
                <p>{text}</p>
                <button onClick={removeTodo}>X</button>      {/* This button will be used to delete the todo. */}
            </div>
        </>
    )
}

export default ToDoItem;