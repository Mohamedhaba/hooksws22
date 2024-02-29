import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({list,deleteFunction,completeFunction,editFunction}) => {
    // console.log(list)
  return (
    <div>
        {
            React.Children.toArray(
                list.map(el=><TaskCard  task={el} functionDelete={deleteFunction} functionComplete={completeFunction} functionEdit={editFunction} />)
            )
        }
    </div>
  )
}

export default TaskList