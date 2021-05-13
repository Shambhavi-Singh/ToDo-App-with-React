import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputHandler = (e) => {
    setTask(e.target.value);
  };
  const addTaskHandler = () => {
    setTasks([...tasks, { text: task, done: false, id: Math.random() * 1000 }]);
    setTask("");
  };
  return (
    <div className="todobox">
      <input type="text" value={task} onChange={inputHandler}></input>
      <button onClick={addTaskHandler}>Add Task</button>
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
