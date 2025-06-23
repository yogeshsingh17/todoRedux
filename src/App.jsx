import './App.css'
import ToDoInput from './components/todoInput'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <h1>Todo App</h1>
      <ToDoInput />
      <ToDoList/>
    </>
  )
}

export default App