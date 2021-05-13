import React from "react";
import Task from "./Task";
const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="tasklist">
      <ul className="">
        {tasks.map((task) => (
          <Task
            setTasks={setTasks}
            tasks={tasks}
            text={task.text}
            id={task.id}
            done={task.done}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
