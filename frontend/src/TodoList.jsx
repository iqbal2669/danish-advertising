import { useState } from 'react'
import './Todolist.css'


function TodoList() {
  const [task, setTask] = useState('')

const [tasks, setTasks] = useState([])
function addTask() {
  if (task.trim() === '') return

  setTasks([...tasks, task])

  setTask('')
}
function deleteTask(index) {
  setTasks(tasks.filter((_, i) => i !== index))
}
  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <p>Welcome to Danish Advertising Practice</p>

<input
  type="text"
  placeholder="Enter your task"
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>

<button onClick={addTask}>Add Task</button>
<ul>
  {tasks.map((item, index) => (
    <li key={index}>
  {item}
  <button onClick={() => deleteTask(index)}>Delete</button>
</li>
  ))}
</ul>
    </div>
  )
}

export default TodoList
