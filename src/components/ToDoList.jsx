import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDoList(){

  // Access the todos state
  // Using this hook we can access the whole state
  // It takes a callback inside which it automatically passes the state.
  const todos = useSelector(state => state.todosState.todos)

    return (
        <>
            <div className="w-screen">
                <div className="mb-2 ml-5">
                    ToDo List :
                </div>
                <div className="grid grid-cols-3 ml-5">
                    {todos.map(todoItem => {
                        return (
                            <ToDoItem 
                                key={todoItem.id} 
                                id={todoItem.id} 
                                text={todoItem.text} 
                                isCompleted={todoItem.completed}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ToDoList;