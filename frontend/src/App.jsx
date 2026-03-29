import { useState } from 'react'
import Planner from './components/Planner'
import Textbox from './components/Textbox'
import './App.css'

function App() {
  const [poolCount,setPoolCount] = useState(0);
  const [assignedCount,setAssignedCount] = useState(0);
const [doneCount,setDoneCount] = useState(0);
  const [tasks, setTasks] = useState(()=>{
const savedTasks=localStorage.getItem('prevTasks');
return savedTasks ?JSON.parse(savedTasks) :[];
});
  const [error,setError]=useState("");

  return (
    <><div> Planner  <span className="">Task Pool :{poolCount}  assignedTasks :{assignedCount}  Done Tasks :{doneCount}</span> </div>

      <Textbox tasks={tasks} setTasks={setTasks} error={error} setError={setError}/>
    </>
  )
}

export default App
//initilise an array of task which is parameter to textbox
//initilise poolcount,assignedcount, donecount which is parameter to planner