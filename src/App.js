
import React,{useState, useEffect} from'react';
import './App.css';

let globalID = 0
function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([]);

   function createTodo(event){
    event.preventDefault();
    setTodos(oldTodos =>{
      setTask('')
      return [...oldTodos, { todo: task, id: globalID++ }];
    })
   }
  function deleteItem(itemID){
    setTodos(oldTodos => oldTodos.filter(item => item.id!== itemID))
  }

  return <div>
    <h1>Best To Do App Ever</h1>
    <form onSubmit={createTodo}>
      <input 
       type="text" 
       value={task} 
       onChange={event => {
        setTask(event.target.value)
      }}/>
      <button type="submit">Create Todo</button>
      <ul>
        {todos.map(item => {
          return <div key = {item.id}>
            <li>{item.todo} <button onClick={() => deleteItem(item.id)}>Delete</button></li>
            
          </div>
        })}
      </ul>
    </form>
    
  </div>
    
}

export default App;
