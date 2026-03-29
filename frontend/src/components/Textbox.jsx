import React,{useEffect,useState} from 'react'
import Planner from './Planner.jsx'

const Textbox = ({tasks,setTasks,error,setError}) => {


const [val,setVal]=useState("");
const [index,setIndex]=useState(()=>{
const savedIndex=localStorage.getItem('prevIndex');
return savedIndex ? parseInt(savedIndex):0;
});


//update state

useEffect(()=>{
localStorage.setItem('prevTasks',JSON.stringify(tasks));
},[tasks]);

useEffect(()=>{
localStorage.setItem('prevIndex',index);
},[index]);

useEffect(()=>{
const timer =setTimeout(()=>{
setError("");},1000);
return ()=>clearTimeout(timer);}
,[error]);

const handleChange =(e)=>{
e.preventDefault();
setVal(e.target.value);
}

const addTask =()=>{
 if(val.trim()===""){
setError("cant add the task is empty");
return;}
setTasks([...tasks,{"id":index ,"task":val, "status":"taskpool"}]);
setIndex(index+1);
setVal("");

}
const deletedItem =(index)=>{
const updateTasks=tasks.filter(item=>(item.id!=index));
setTasks(updateTasks);
}

const display =()=>{
return (
tasks.map(item=>(<div draggable key={item.id}>{item.id} .{item.task} - {item.status} <span  className="btn"onClick={()=>{deletedItem(item.id)}}>delete</span> </div>))
);
}




    return (
        <div >
            <input type="text" value={val} onChange={handleChange} placeholder='Enter the Task' />
	    <button onClick={addTask}> add the Task</button>
{error &&(<div>{error}</div>)}
 
<Planner />

  <div> {display()}</div>
        </div>
    )
}

export default Textbox
/*
input box to enter task name , enter button "add task"
*/