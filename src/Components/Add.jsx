import React, { useState } from "react";

const Add = ({ addFunction }) => {
  const [action, setAction] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newTask={
        id:Math.random,action,isDone:false
    }
    addFunction(newTask)
  }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
