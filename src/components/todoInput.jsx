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
            <div>
                <input type="text" onChange={e => setTodo(e.target.value)} value={todo} />
                <button onClick={addTodoToStore}>Add Todo</button>
            </div>
        </>
    )
}

export default ToDoInput;