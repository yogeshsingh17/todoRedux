import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDoList(){

  // Access the todos state
  // Using this hook we can access the whole state
  // It takes a callback inside which it automatically passes the state.
  const todos = useSelector(state => state.todosState.todos)

    return (
        <>
            <div>
                <div>
                    ToDo List :
                </div>
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
        </>
    )
}

export default ToDoList;