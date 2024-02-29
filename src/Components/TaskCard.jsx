import React from 'react'
import Edit from './Edit'

const TaskCard = ({task,functionDelete,functionComplete,functionEdit}) => {
    // console.log(functionEdit)
  return (
    <div>
        <h1>{task.action}</h1>
        <button onClick={()=>functionDelete(task.id)}  >Delete</button>
        <button onClick={()=>functionComplete(task.id)}>{task.isDone?"Undo":"Complete"}</button>


        <Edit task={task}  editeTaskFunction={functionEdit}/>
        <hr />
    </div>
  )
}

export default TaskCard