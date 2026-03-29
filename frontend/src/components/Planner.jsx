import React from 'react'

const planner = () => {

const days =["MonDay","TuesDay","WednesDay","ThursDay","FriDay","SaturDay","SunDay"];

const tableFormat=()=>{
return (
days.map(day=>(<React.Fragment><p className="border-r">{day}</p><p> </p></React.Fragment>))
);}
    return (<><div className="text-3xl">Planner</div> 


<p className="grid grid-cols-2  border-b"> {tableFormat()}</p>    </>)
}

export default planner
//planner component to show the tasks in a day and also to drag and drop the tasks to different days