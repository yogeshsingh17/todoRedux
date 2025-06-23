import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../redux/actions/todoActions";

function ToDoInput(){

    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();         //This dispatch function is already connected to the store, because we wrapped our whole application in store.

    function addTodoToStore(){
        dispatch(addTodoActionCreator(todo));
    }

    return (
        <>
            <div className="flex justify-center gap-5">
                <div className="border border-gray-500 w-[30vw] p-2">
                    <input 
                        className="w-[100%] border border-none focus:outline-none" 
                        type="text" 
                        onChange={e => setTodo(e.target.value)} 
                        value={todo} 
                    />
                </div>
                <button 
                    className="rounded-md px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                    onClick={addTodoToStore}
                >
                    Add Todo
                </button>
            </div>
        </>
    )
}

export default ToDoInput;