import { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import Add from './Components/Add';

function App() {
  const [todos, setTodos] = useState([
    {id:Math.random(),action:"Wake up",isDone:true},
    {id:Math.random(),action:"Go Out",isDone:true},
  ])
 const handleDelete=(id)=> setTodos(todos.filter(el=>el.id!==id))
 const handleComplete=(id)=>setTodos(todos.map(el=>el.id===id?{...el,isDone:!el.isDone}:el))
 const handleAdd=(hrouz)=>setTodos([...todos,hrouz]);
 const handleEdit=(edtiedOne)=>setTodos(todos.map(el=>el.id===edtiedOne.id?edtiedOne:el))
  return (
    <div className="App">
      <Add addFunction={handleAdd}/>
    <TaskList list={todos} deleteFunction={handleDelete} completeFunction={handleComplete} editFunction={handleEdit}/>
    
  
    
    </div>
  );
}

export default App;
