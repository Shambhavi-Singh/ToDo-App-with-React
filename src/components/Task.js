import React from "react";

const Task = ({ task, id, done }) => {
  return (
    <div className="task">
      <li>{task}</li>
      <button>Delete</button>
      <button>Done</button>
    </div>
  );
};

export default Task;
