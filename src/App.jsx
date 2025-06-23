import './App.css'
import ToDoInput from './components/todoInput'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <div className='flex flex-col'>
      <div className='m-4 font-bold flex justify-center text-3xl '>
        Todo App
      </div>
      <ToDoInput />
      <div className='grid grid-cols-3'>
        <ToDoList/>
      </div>
    </div>
  )
}

export default App