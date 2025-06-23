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
            <div className="border border-gray-400 w-[30vw] rounded-xl shadow-lg shadow-gray-400 bg-gray-350 mb-10">
                <div className="flex justify-between ml-4 mr-4 mt-2 mb-2">
                    <input 
                        type="checkbox" 
                        checked={isCompleted} 
                        onChange={toggleTodo}
                    />
                    <button
                        onClick={removeTodo}
                    >
                        X                                       {/* This button will be used to delete the todo. */}
                    </button>
                </div>
                <p className="ml-4 mr-4 mb-2">
                    {text}
                </p>
            </div>
        </>
    )
}

export default ToDoItem;